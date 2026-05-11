import { createRootRoute, Outlet } from "@tanstack/react-router";
import { SidebarInset, SidebarProvider } from "@workspace/shared";
import { AppSidebar } from "./-layout/app-sidebar";
import { Header } from "./-layout/header";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => <p>Not Found</p>,
  errorComponent: (props) => <p>Error: {JSON.stringify(props)}</p>,
});

function RootLayout() {
  return (
    <>
      <SidebarProvider className="flex flex-1 min-h-screen">
        <AppSidebar />
        <SidebarInset className="flex flex-1 md:gap-4 gap-2 overflow-x-hidden relative lg:p-6 md:p-5 sm:p-4 p-2 max-w-screen-2xl">
          <Header />
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
