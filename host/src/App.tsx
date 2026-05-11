import { TanStackDevtools } from "@tanstack/react-devtools";
import { FormDevtoolsPanel } from "@tanstack/react-form-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Toaster, TooltipProvider } from "@workspace/shared";
import { useInitApp } from "./core/use-init-app";
import { routeTree } from "./routeTree.gen";

const isDev = import.meta.env.DEV;
const queryClient = new QueryClient();
export const router = createRouter({ routeTree, defaultPreload: "intent" });

export function App() {
  useInitApp();

  return (
    <>
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
      <Toaster visibleToasts={5} className="pointer-events-auto" />
      {isDev && (
        <TanStackDevtools
          config={{ position: "bottom-right", hideUntilHover: true }}
          eventBusConfig={{ connectToServerBus: true }}
          plugins={[
            {
              name: "TanStack Query",
              render: <ReactQueryDevtoolsPanel />,
            },
            {
              name: "TanStack Router",
              render: <TanStackRouterDevtoolsPanel router={router} />,
            },
            {
              name: "TanStack Form",
              render: <FormDevtoolsPanel />,
            },
          ]}
        />
      )}
    </>
  );
}

export function AppRoot() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
