import { PlusIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { Button } from "@workspace/shared";
import { m } from "@/paraglide/messages";

export function Toolbar() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-base font-semibold text-foreground sm:text-lg">{m.employees()}</h1>
      <Link to="/employees/$employeeId" params={{ employeeId: "add" }}>
        <Button>
          <PlusIcon data-icon="inline-start" />
          {m.addEmployee()}
        </Button>
      </Link>
    </div>
  );
}
