"use client";
import { format, isValid } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FormControl } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form/dist/types";
import { Dispatch, SetStateAction } from "react";

interface IDatePicker<T extends FieldValues, U extends Path<T>> {
  field: ControllerRenderProps<T, U>;
  key: U;
  value: Date | undefined;
  onSelect: (date: Date) => void;
}

export function DatePickerForm({
  value,
  onSelect,
}: IDatePicker<any, "date_of_birth">) {
  const fromYear = () => {
    const currentDate = new Date();
    const eightYearsAgo = new Date(
      currentDate.getFullYear() - 100,
      currentDate.getMonth(),
      currentDate.getDate()
    );
    return eightYearsAgo.getFullYear();
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl className="mt-2">
          <Button
            variant={"outline"}
            className={cn(
              "w-full pl-3 text-left font-normal",
              !value && "text-muted-foreground"
            )}
          >
            {value && isValid(value) ? (
              format(value!, "PPP")
            ) : (
              <span>Pick a date</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          toYear={new Date().getFullYear()}
          fromYear={fromYear()}
          captionLayout="dropdown-buttons"
          mode="single"
          selected={value}
          onSelect={(e) => onSelect(e!)}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
