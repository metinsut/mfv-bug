import { useInitApi } from "./use-init-api";
import { useInitTheme } from "./use-init-theme";
import { useInitZod } from "./use-init-zod";

export function useInitApp() {
  useInitApi();
  useInitZod();
  useInitTheme();
}
