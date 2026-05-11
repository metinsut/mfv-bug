import { defineConfig } from "orval";

const VITE_HOST_DOC_URL = import.meta.env.VITE_HOST_DOC_URL;

if (!VITE_HOST_DOC_URL) {
  throw new Error("VITE_HOST_DOC_URL is not set");
}

export default defineConfig({
  host: {
    output: {
      mode: "tags-split",
      target: "./clients",
      schemas: "./schemas",
      indexFiles: true,
      client: "axios",
      override: {
        header: false,
        useTypeOverInterfaces: true,
        suppressReadonlyModifier: true,
        mutator: {
          path: "./custom-instance.ts",
        },
      },
    },
    input: {
      target: VITE_HOST_DOC_URL,
    },
    hooks: {
      afterAllFilesWrite: ["bunx @biomejs/biome check . --write --unsafe"],
    },
  },
});
