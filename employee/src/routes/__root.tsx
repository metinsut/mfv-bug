import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useSidebar } from "@workspace/shared";
import { useEffect } from "react";
import { Breadcrumb } from "./-components/breadcrumb";
import { EmployeeMenuList } from "./-components/menu-list";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => <p>Not Found</p>,
});

function RootLayout() {
  const { setOpen } = useSidebar();

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Breadcrumb />
      <div className="flex items-start gap-3 flex-1 relative">
        <EmployeeMenuList />
        <Outlet />
      </div>
    </>
  );
}
