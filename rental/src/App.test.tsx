import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./App";

test("renders markup", () => {
  expect(renderToStaticMarkup(<App />)).toBe("<div>Rental App</div>");
});
