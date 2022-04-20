import { createContext, useState } from "react";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, Theme } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
import { AppDarkTheme, AppLightTheme } from "customTheme";

export enum AppTheme {
  light,
  dark,
}
export const themes: { [t in AppTheme]: Theme } = {
  [AppTheme.light]: AppLightTheme,
  [AppTheme.dark]: AppDarkTheme,
};
const defaultTheme = AppTheme.dark;

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext({ theme: defaultTheme, setTheme: (theme: AppTheme) => {} });

const engine = new Styletron();

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<AppTheme>(defaultTheme);

  return (
    <AppContext.Provider value={{ theme: theme, setTheme: (theme: AppTheme) => setTheme(theme) }}>
      <StyletronProvider value={engine}>
        <BaseProvider theme={themes[theme]}>{children}</BaseProvider>
      </StyletronProvider>
    </AppContext.Provider>
  );
}
