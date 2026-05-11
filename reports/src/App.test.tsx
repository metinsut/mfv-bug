import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./App";

test("renders no markup", () => {
  expect(renderToStaticMarkup(<App />)).toBe("");
});
