import { createTheme } from "baseui";

export const AppDarkTheme = createTheme(
  {
    primary: "#000000",
    primaryA: "#FFFFFF",
    primaryB: "#212121",
  },
  {
    colors: {
      headerNavigationFill: "#000000",
      inputFill: "#212121",
    },
  }
);

export const AppLightTheme = createTheme(
  {
    primary: "#FFFFFF",
    primaryA: "#000000",
    primaryB: "#CCCCCC",
  },
  {
    headerNavigationFill: "#FFFFFF",
  }
);
