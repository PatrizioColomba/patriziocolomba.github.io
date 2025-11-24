export async function callMCPTool(toolName: string, args: Record<string, any>): Promise<any> {
  const mcpUrl = 'https://mcp-deploy-test.azurewebsites.net/sse';
  
  const mcpData = await new Promise<any>((resolve, reject) => {
    const eventSource = new EventSource(mcpUrl);
    const timeout = setTimeout(() => {
      eventSource.close();
      reject(new Error('MCP connection timeout'));
    }, 10000);

    let messageEndpoint: string | null = null;

    eventSource.addEventListener('endpoint', async (event) => {
      console.log('SSE endpoint event:', event.data);
      messageEndpoint = event.data;

      try {
        const initRequest = {
          jsonrpc: '2.0',
          id: 0,
          method: 'initialize',
          params: {
            protocolVersion: '2024-11-05',
            capabilities: {},
            clientInfo: {
              name: 'web-client',
              version: '1.0.0'
            }
          }
        };

        await fetch(`https://mcp-deploy-test.azurewebsites.net${messageEndpoint}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(initRequest),
        });
      } catch (err) {
        console.error('Failed to initialize:', err);
        clearTimeout(timeout);
        eventSource.close();
        reject(err);
      }
    });

    eventSource.addEventListener('message', async (event) => {
      console.log('SSE message event:', event.data);
      try {
        const message = JSON.parse(event.data);
        console.log('Parsed MCP message:', message);
        
        if (message.error) {
          console.error('MCP error:', message.error);
          clearTimeout(timeout);
          eventSource.close();
          reject(new Error(`MCP error: ${message.error.message}`));
          return;
        }
        
        if (message.id === 0 && message.result) {
          console.log('Initialized successfully, sending tool call...');
          
          await fetch(`https://mcp-deploy-test.azurewebsites.net${messageEndpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              jsonrpc: '2.0',
              method: 'notifications/initialized'
            }),
          });
          
          await fetch(`https://mcp-deploy-test.azurewebsites.net${messageEndpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              jsonrpc: '2.0',
              id: 1,
              method: 'tools/call',
              params: {
                name: toolName,
                arguments: args
              }
            }),
          });
          return;
        }
        
        if (message.id === 1 && message.result) {
          clearTimeout(timeout);
          eventSource.close();
          resolve(message);
        }
      } catch (err) {
        console.warn('Failed to parse SSE message:', event.data, err);
      }
    });

    eventSource.onerror = (error) => {
      console.error('SSE connection error:', error);
      clearTimeout(timeout);
      eventSource.close();
      reject(new Error('SSE connection failed'));
    };

    eventSource.onopen = () => {
      console.log('SSE connection opened');
    };
  });

  return mcpData;
}
