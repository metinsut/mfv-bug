import { BuildingOfficeIcon, CaretLeftIcon } from "@phosphor-icons/react";
import { useNavigate } from "@tanstack/react-router";
import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/shared";
import { m } from "@/paraglide/messages";

export function DepartmentFormHeader() {
  const navigate = useNavigate();

  const handleBackToList = () => {
    navigate({ to: "/departments/list" });
  };

  return (
    <Card>
      <CardHeader className="flex items-start gap-3">
        <div className="shrink-0 rounded-2xl bg-primary/10 p-3 text-primary">
          <BuildingOfficeIcon className="size-6" />
        </div>
        <div>
          <CardTitle className="text-xl font-semibold tracking-tight">
            {m.editDepartment()}
          </CardTitle>
          <CardDescription className="max-w-2xl text-sm">
            {m.departmentFormDescription()}
          </CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Button type="button" variant="outline" onClick={handleBackToList}>
          <CaretLeftIcon />
          {m.backToList()}
        </Button>
      </CardFooter>
    </Card>
  );
}
