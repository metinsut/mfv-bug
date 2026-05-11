import { createMemoryHistory, createRouter } from "@tanstack/react-router";
import { expect, test } from "bun:test";
import { routeTree } from "./routeTree.gen";
import { shouldRedirectEmployeeSplat } from "./routes/employee_.$";

test("employee root is handled by the employee splat redirect", async () => {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: ["/employee"] }),
  });

  await router.load();

  const match = router.state.matches.at(-1);

  expect(match?.routeId).toBe("/employee_/$");
  expect(match?.params._splat).toBe("");
  expect(shouldRedirectEmployeeSplat(match?.params._splat)).toBe(true);
});

test("employee subpaths mount the employee remote", async () => {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: ["/employee/employees/list"] }),
  });

  await router.load();

  const match = router.state.matches.at(-1);

  expect(match?.routeId).toBe("/employee_/$");
  expect(match?.params._splat).toBe("employees/list");
  expect(shouldRedirectEmployeeSplat(match?.params._splat)).toBe(false);
});
