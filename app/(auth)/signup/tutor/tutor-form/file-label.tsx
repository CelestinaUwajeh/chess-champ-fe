import React from "react";
import { cn } from "@/lib/utils";

interface IFileLabel extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const FileLabel = React.forwardRef<HTMLLabelElement, IFileLabel>(
  ({ className, htmlFor, children, ...props }: IFileLabel) => {
    return (
      <label
        {...props}
        htmlFor={htmlFor}
        className={cn(
          "flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      >
        {children}
      </label>
    );
  }
);

FileLabel.displayName = "Label";

export default FileLabel;
