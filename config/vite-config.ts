import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";

export const sharedPackage = {
  react: { singleton: true },
  "react-dom": { singleton: true },
  "@phosphor-icons/react": { singleton: true },
  "@tanstack/react-router": { singleton: true },
  "@tanstack/react-query": { singleton: true },
  "@tanstack/react-form": { singleton: true },
  "@tanstack/react-table": { singleton: true },
  "@workspace/shared": {
    singleton: true,
    import: "@workspace/shared",
  },
};

export const remoteEntryFile = "remoteEntry.js";

export const createOrigin = (domain: string, port: number) => `http://${domain}.localhost:${port}`;

export const appNames = {
  host: "host",
  employee: "employee",
} as const;

export type appNamesType = (typeof appNames)[keyof typeof appNames];

export const remoteApps = {
  host: { port: 3000 },
  employee: { port: 3004 },
} as Record<appNamesType, { port: number }>;

export function getRemoteApp(appName: appNamesType) {
  const app = remoteApps[appName];

  return {
    domain: appName,
    federationName: appName,
    port: app.port,
  };
}

export function createBasePlugins() {
  return [tanstackRouter({ target: "react" }), react(), tailwindcss()];
}

export function createServerConfig(appName: appNamesType, open?: boolean) {
  const app = getRemoteApp(appName);

  return {
    host: true,
    port: app.port,
    strictPort: true,
    open: open,
    origin: createOrigin(app.domain, app.port),
    fs: {
      allow: [".", "..", "../shared"],
    },
  };
}

export function federationConfig(appName: appNamesType) {
  return {
    dts: false,
    dev: { disableDynamicRemoteTypeHints: true, remoteHmr: true },
    name: appName,
    filename: remoteEntryFile,
    shared: sharedPackage,
  };
}
