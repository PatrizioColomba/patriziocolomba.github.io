'use client'

import { Grid2, Typography } from "@mui/material";
import AppTheme from "./AppTheme";
import { useEffect, useState } from "react";
import CircularIndeterminate from "./CircularIndeterminate";
import ErrorMessage from "./ErrorMessage";
import PgpLink from "./PgpLink";


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
    const mcp_url = process.env.NEXT_PUBLIC_MCP_URL;
    if (!mcp_url) {
      console.warn('MCP URL not configured, trying backend');
      return await GetTest();
    }
    try {
      const endpoint = `${mcp_url}/api/say_hello`;
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error("Failed to fetch from MCP server");
      const result = await response.json();
      return [{ data: result.message }];
    } catch (mcpError) {
      console.warn('MCP server not reachable, trying backend:', mcpError);
      return await GetTest();
    }
  }

  async function GetTest(): Promise<Data[]> {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!backendUrl) {
      throw new Error("BACKEND URL not configured. Please contact the administrator.");
    }
    try {
      const response = await fetch(`${backendUrl}/Test`);
      if (!response.ok) throw new Error("Error retrieving data from backend");
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error("Unable to contact MCP or backend.");
    }
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
