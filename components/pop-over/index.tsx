import { AlertDialog, AlertDialogContent } from "@/components/ui/dialogue";

interface IPropType {
  open: boolean;
  setOpen: (value: boolean) => void;
  children: React.ReactNode;
}

const Popover = ({ open, setOpen, children }: IPropType) => {
  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <AlertDialogContent>{children}</AlertDialogContent>
    </AlertDialog>
  );
};

export default Popover;
