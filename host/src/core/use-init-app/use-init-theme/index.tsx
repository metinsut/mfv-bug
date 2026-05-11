import { useEffect } from "react";
import { useTheme } from "./store";

export function useInitTheme() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

      setTheme(systemTheme);
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme, setTheme]);
}
