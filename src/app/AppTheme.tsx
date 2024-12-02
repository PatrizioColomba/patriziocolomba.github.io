import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import React from "react";

interface AppThemeProps {
    children: React.ReactNode
}

export default function AppTheme({children}: AppThemeProps) {
    const theme = createTheme({
        palette: {
            mode: 'dark'
        }
    })

    return (<ThemeProvider theme={theme}><CssBaseline />{children}</ThemeProvider>)
}