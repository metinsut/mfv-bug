import { Input, SidebarTrigger, useSidebar } from "@workspace/shared";
import { m } from "@/paraglide/messages";

export function Header() {
  const { isMobile } = useSidebar();

  return (
    <header className="flex shrink-0 items-center gap-2">
      <div className="flex items-center gap-2 px-2">
        {isMobile && <SidebarTrigger />}
        <Input className="bg-background" placeholder={m.search()} />
      </div>
    </header>
  );
}
