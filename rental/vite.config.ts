import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { appNames, createServerConfig, federationConfig } from "@workspace/config/vite-config";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      ...federationConfig(appNames.rental),
      exposes: {
        "./App": "./src/App.tsx",
      },
    }),
  ],
  server: createServerConfig(appNames.rental),
  resolve: {
    tsconfigPaths: true,
  },
});
