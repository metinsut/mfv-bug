import { createRouter, RouterProvider } from "@tanstack/react-router";
import { useInitApp } from "./core/use-init-app";
import { routeTree } from "./routeTree.gen";

export const router = createRouter({ routeTree, defaultPreload: "intent" });

export default function App() {
  useInitApp();
  return <RouterProvider router={router} basepath="employee" />;
}
