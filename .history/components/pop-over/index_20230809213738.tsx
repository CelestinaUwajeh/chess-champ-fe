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
}

const Popover = ({
  open,
  setOpen,
  children,
  displayCloseIcon = true,
  isOverlayActive = false,
}: IPropType) => {
  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <AlertDialogContent
        onOverlayClick={isOverlayActive ? setOpen : undefined}
        className="w-[1120px]"
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
