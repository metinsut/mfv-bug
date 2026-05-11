import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { federation } from "@module-federation/vite";
import type { appNamesType } from "@workspace/config/vite-config";
import {
  appNames,
  createBasePlugins,
  createOrigin,
  createServerConfig,
  federationConfig,
  getRemoteApp,
  remoteApps,
  remoteEntryFile,
} from "@workspace/config/vite-config";
import { defineConfig } from "vite";

const createRemoteDefinition = (appName: appNamesType) => {
  const app = getRemoteApp(appName);

  return {
    type: "module",
    name: app.federationName,
    entry: `${createOrigin(app.domain, app.port)}/${remoteEntryFile}`,
  };
};

const remoteAppDefinitions = Object.fromEntries(
  (Object.keys(remoteApps) as appNamesType[])
    .filter((appName) => appName !== appNames.host)
    .map((appName) => {
      const remote = createRemoteDefinition(appName);
      return [remote.name, remote];
    }),
);

export default defineConfig({
  plugins: [
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/paraglide",
      strategy: ["cookie", "baseLocale", "preferredLanguage"],
    }),
    federation({
      ...federationConfig(appNames.host),
      remotes: remoteAppDefinitions,
    }),
    ...createBasePlugins(),
  ],
  server: createServerConfig(appNames.host, true),
  resolve: {
    tsconfigPaths: true,
  },
});
