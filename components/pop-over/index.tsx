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
}

const Popover = ({
  open,
  setOpen,
  children,
  displayCloseIcon = true,
}: IPropType) => {
  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <AlertDialogContent>
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
