import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRoot } from "./App";
import "@workspace/shared/globals.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <AppRoot />
    </StrictMode>,
  );
}
