import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { m } from "@/paraglide/messages";
import { Language } from "./-language";
import { Theme } from "./-theme";

export const Route = createFileRoute("/settings/")({
  component: Settings,
});

export function Settings() {
  return (
    <div className="grid gap-4 justify-start">
      <div className="flex gap-4 justify-between rounded-lg border bg-card p-4">
        <Link to="/app/settings/change-password">{m.settingsChangePassword()}</Link>
      </div>
      <Theme />
      <Language />
      <Outlet />
    </div>
  );
}
