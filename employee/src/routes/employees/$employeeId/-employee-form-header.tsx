import { CaretLeftIcon, UserIcon } from "@phosphor-icons/react";
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

export function EmployeeFormHeader() {
  const navigate = useNavigate();

  const handleBackToList = () => {
    navigate({ to: "/employees/list" });
  };

  return (
    <Card>
      <CardHeader className="flex items-start gap-3">
        <div className="shrink-0 rounded-2xl bg-primary/10 p-3 text-primary">
          <UserIcon className="size-6" />
        </div>
        <div>
          <CardTitle className="text-xl font-semibold tracking-tight">{m.editEmployee()}</CardTitle>
          <CardDescription className="max-w-2xl text-sm">
            {m.employeeFormDescription()}
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
