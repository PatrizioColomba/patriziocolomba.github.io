'use client'

import { Grid2, Typography } from "@mui/material";
import AppTheme from "./AppTheme";
import { useEffect, useState } from "react";
import CircularIndeterminate from "./CircularIndeterminate";
import ErrorMessage from "./ErrorMessage";
import PgpLink from "./PgpLink";
import CommitHash from "./CommitHash";

export default function Home() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    error && setError(null);
    setIsLoading(true);
    GetTest().then(setData).catch(setError).finally(() => setIsLoading(false));
  }, []);

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
  </Grid2><CommitHash /><PgpLink /></main></AppTheme>);
}

type Data = {
  data: string;
};
