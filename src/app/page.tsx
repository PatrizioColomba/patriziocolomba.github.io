'use client'

import { Grid2, Typography } from "@mui/material";
import AppTheme from "./AppTheme";
import { useEffect, useState } from "react";
import CircularIndeterminate from "./CircularIndeterminate";
import ErrorMessage from "./ErrorMessage";
import PgpLink from "./PgpLink";
import { callMCPTool } from "./mcpClient";

export default function Home() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    error && setError(null);
    setIsLoading(true);
    GetTestMCP().then(setData).catch(setError).finally(() => setIsLoading(false));
  }, []);

  async function GetTestMCP(): Promise<Data[]> {
    try {
      const result = await callMCPTool('say_hello', {});
      return [{ data: result.result?.content?.[0]?.text || JSON.stringify(result, null, 2) }];
    } catch (mcpError) {
      console.warn('MCP server not reachable, falling back to backend:', mcpError);
      return await GetTest();
    }
  }

  async function GetTest(): Promise<Data[]> {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!backendUrl) {
      throw new Error("Something went wrong. Please try again later.");
    }
    const response = await fetch(`${backendUrl}/Test`);
    const data = await response.json();
    return data;
  }

  return (<AppTheme><main><Grid2 sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    {isLoading && <CircularIndeterminate />}
    {!isLoading && !error && data.map((item, index) => (<Typography key={index}>{item.data}</Typography>))}
    {!isLoading && error && ErrorMessage(error.message)}
  </Grid2><PgpLink /></main></AppTheme>);
}

type Data = {
  data: string;
};
