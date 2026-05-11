import { TrashIcon, WarningCircleIcon } from "@phosphor-icons/react";
import type { ReactElement } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import type { ButtonProps } from "../ui/button";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type BaseDeleteDialogProps = {
  /** Controls the open state of the dialog */
  open: boolean;
  /** Callback when dialog open state changes */
  onOpenChange: (open: boolean) => void;
  /** Function to execute when delete is confirmed */
  onDelete: () => void;
  /** Main title/label for the delete confirmation */
  title: string;
  /** Optional description text */
  description?: string;
  /** Loading state for the delete button */
  isLoading?: boolean;
  /** Custom class name for the content container */
  className?: string;
  /** Custom cancel button text (defaults to translated "cancel") */
  cancelText: string;
  /** Custom delete button text (defaults to translated "delete") */
  deleteText: string;
};

type DeleteDialogWithTriggerProps = BaseDeleteDialogProps & {
  /** Custom trigger element. If not provided, uses default DeleteAction */
  trigger?: ReactElement;
  /** Props for the default DeleteAction trigger button */
  buttonProps?: ButtonProps;
};

type DeleteDialogWithoutTriggerProps = BaseDeleteDialogProps & {
  trigger?: never;
  buttonProps?: never;
};

export type DeleteDialogProps = DeleteDialogWithTriggerProps | DeleteDialogWithoutTriggerProps;

/**
 * Internal component that renders the dialog content
 */
function DeleteDialogContent(props: BaseDeleteDialogProps) {
  const { onDelete, title, description, cancelText, deleteText } = props;

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogMedia className="bg-destructive/10 text-destructive">
          <WarningCircleIcon />
        </AlertDialogMedia>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel size="lg">{cancelText}</AlertDialogCancel>
        <AlertDialogAction size="lg" variant="destructive" onClick={onDelete}>
          {deleteText}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}

/**
 * Delete confirmation dialog with customizable trigger
 *
 * @example
 * // With default trigger
 * <DeleteDialog
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   onDelete={handleDelete}
 *   label="Delete User"
 *   description="This action cannot be undone."
 * />
 *
 * @example
 * // With custom trigger
 * <DeleteDialog
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   onDelete={handleDelete}
 *   label="Delete User"
 *   trigger={<Button variant="destructive">Delete</Button>}
 * />
 */
export function DeleteDialog(props: DeleteDialogProps) {
  const { open, onOpenChange, trigger, buttonProps, deleteText, ...contentProps } = props;

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      {trigger ? (
        <AlertDialogTrigger render={trigger} />
      ) : (
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenChange(true);
                }}
                variant="outline"
                size="icon"
                {...buttonProps}
              >
                <TrashIcon />
              </Button>
            }
          />
          <TooltipContent>
            <p className="font-semibold">{deleteText}</p>
          </TooltipContent>
        </Tooltip>
      )}
      <DeleteDialogContent
        open={open}
        onOpenChange={onOpenChange}
        deleteText={deleteText}
        {...contentProps}
      />
    </AlertDialog>
  );
}

/**
 * Delete confirmation dialog without trigger (controlled externally)
 *
 * @example
 * <DeleteDialogCore
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   onDelete={handleDelete}
 *   label="Delete User"
 *   description="This action cannot be undone."
 * />
 */
export function DeleteDialogCore(props: BaseDeleteDialogProps) {
  const { open, onOpenChange, ...contentProps } = props;

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <DeleteDialogContent open={open} onOpenChange={onOpenChange} {...contentProps} />
    </AlertDialog>
  );
}
