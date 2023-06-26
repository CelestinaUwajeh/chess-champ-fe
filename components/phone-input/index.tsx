import { cn } from "@/lib/utils";
import { ControllerRenderProps } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";

import "react-phone-number-input/style.css";
import "./phone.css";

interface IMobileInput {
  field: ControllerRenderProps<any, any>;
  className?: string;
}

const MobileInput = ({ field, className }: IMobileInput) => {
  return (
    <PhoneInputWithCountry
      className={cn(
        "flex h-12 w-full rounded-md border border-input bg-transparent px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      defaultCountry="NG"
      {...field}
      rules={{ required: true }}
    />
  );
};

export default MobileInput;
