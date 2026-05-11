import { create } from "zustand";
import type { StateStorage } from "zustand/middleware";
import { createJSONStorage, persist } from "zustand/middleware";

export const ThemeTypes = {
  dark: "dark",
  light: "light",
  system: "system",
} as const;

export type ThemeTypes = (typeof ThemeTypes)[keyof typeof ThemeTypes];

type ThemeStore = {
  theme: ThemeTypes;
  setTheme: (theme: ThemeTypes) => void;
};

const noopStorage: StateStorage = {
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined,
};

export const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: ThemeTypes.system,
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "mf-vite-bug-example-theme",
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? noopStorage : window.localStorage,
      ),
    },
  ),
);
