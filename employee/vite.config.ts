import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { federation } from "@module-federation/vite";
import {
  appNames,
  createBasePlugins,
  createServerConfig,
  federationConfig,
} from "@workspace/config/vite-config";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    ...createBasePlugins(),
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/paraglide",
      strategy: ["cookie", "baseLocale", "preferredLanguage"],
    }),
    federation({
      ...federationConfig(appNames.employee),
      exposes: {
        "./App": "./src/App.tsx",
      },
    }),
  ],
  server: createServerConfig(appNames.employee),
  resolve: {
    tsconfigPaths: true,
  },
});
