'use client'

import { Grid2, Typography } from "@mui/material";
import AppTheme from "./AppTheme";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    GetTest().then(setData).catch(console.error);
  }, []);

  async function GetTest(): Promise<Data[]> {
    const response = await fetch('https://patriziocolomba-web-app.azurewebsites.net/Test');
    const data = await response.json();
    return data
  }

  return (<AppTheme><main><Grid2 sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    { data.map(item => (<Typography>{item.data}</Typography>))}
  </Grid2></main></AppTheme>);
}

type Data = {
  data: string;
};
