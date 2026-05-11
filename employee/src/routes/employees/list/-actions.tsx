import { PencilIcon } from "@phosphor-icons/react";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@workspace/shared";

type Props = {
  employeeId: string;
};

export function Actions(props: Props) {
  const { employeeId } = props;
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate({ to: "/employees/$employeeId", params: { employeeId } });
  };

  return (
    <div className="flex justify-end gap-2">
      <Button variant="outline" size="icon" onClick={handleEdit}>
        <PencilIcon className="size-3" />
      </Button>
    </div>
  );
}
