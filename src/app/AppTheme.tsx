import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, useMediaQuery } from "@mui/material";
import React from "react";

interface AppThemeProps {
    children: React.ReactNode
}

export default function AppTheme({children}: AppThemeProps) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = createTheme({
        typography: {
            fontFamily: 'Space Mono, Roboto'
        },
        palette: {
            mode: prefersDarkMode ? 'dark' : 'light'
        }
    })

    return (<ThemeProvider theme={theme}><CssBaseline />{children}</ThemeProvider>)
}