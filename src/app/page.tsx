'use client'

import { Grid2, Typography } from "@mui/material";
import AppTheme from "./AppTheme";

export default function Home() {
  return (<AppTheme><main><Grid2 sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Typography>A simple text test.</Typography>
  </Grid2></main></AppTheme>);
}
