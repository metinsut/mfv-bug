import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { Card, CardContent, CardHeader, CardTitle, Label, Switch } from "@workspace/shared";
import { useTheme } from "@/core/use-init-app/use-init-theme/store";
import { m } from "@/paraglide/messages";

type SettingsThemeProps = Record<string, never>;

export function Theme(_props: SettingsThemeProps) {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  function handleThemeChange(checked: boolean) {
    setTheme(checked ? "dark" : "light");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{m.settingsThemeLabel()}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="theme-switch" className="text-sm">
            {isDark ? m.themeDark() : m.themeLight()} mode
            {isDark ? (
              <MoonIcon className="text-muted-foreground size-5" />
            ) : (
              <SunIcon className="text-muted-foreground size-5" />
            )}
          </Label>
          <Switch id="theme-switch" checked={isDark} onCheckedChange={handleThemeChange} />
        </div>
      </CardContent>
    </Card>
  );
}
