import { PencilIcon } from "@phosphor-icons/react";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@workspace/shared";

type Props = {
  departmentId: string;
};

export function Actions(props: Props) {
  const { departmentId } = props;
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate({ to: "/departments/$departmentId", params: { departmentId } });
  };

  return (
    <div className="flex justify-end gap-2">
      <Button variant="outline" size="icon" onClick={handleEdit}>
        <PencilIcon className="size-3" />
      </Button>
    </div>
  );
}
