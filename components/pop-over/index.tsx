import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
} from "@/components/ui/dialogue";
import { X } from "lucide-react";

interface IPropType {
  open: boolean;
  setOpen: (value: boolean) => void;
  children: React.ReactNode;
  displayCloseIcon?: boolean;
  isOverlayActive?: boolean;
  maxWidth?: string;
}

const Popover = ({
  open,
  setOpen,
  children,
  displayCloseIcon = true,
  isOverlayActive = false,
  maxWidth = "max-w-2xl",
}: IPropType) => {
  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <AlertDialogContent
        onOverlayClick={isOverlayActive ? setOpen : undefined}
        className={`${maxWidth}`}
      >
        {displayCloseIcon && (
          <AlertDialogCancel className="border-none outline-none absolute top-0 right-0 hover:bg-transparent">
            <X />
          </AlertDialogCancel>
        )}
        {children}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Popover;
