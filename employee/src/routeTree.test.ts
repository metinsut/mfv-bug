import { expect, test } from "bun:test";

test("employee route tree imports without initialization errors", async () => {
  const mod = await import("./routeTree.gen");

  expect(mod.routeTree).toBeDefined();
});
