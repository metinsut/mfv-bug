import { PlusIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { Button } from "@workspace/shared";
import { m } from "@/paraglide/messages";

export function Toolbar() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-base font-semibold text-foreground sm:text-lg">{m.departments()}</h1>
      <Link to="/departments/$departmentId" params={{ departmentId: "add" }}>
        <Button>
          <PlusIcon data-icon="inline-start" />
          {m.addDepartment()}
        </Button>
      </Link>
    </div>
  );
}
