import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function useAppContext() {
  const { theme, setTheme } = useContext(AppContext);

  return { theme, setTheme };
}
