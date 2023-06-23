"use client";
import { format } from "date-fns";
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
import { FormSchema as TutorFormSchema } from ".";
import { Dispatch, SetStateAction } from "react";
import { StudentFormSchema } from "../../student/student-form";

interface IDatePicker<T extends FieldValues, U extends Path<T>> {
  field: ControllerRenderProps<T, U>;
  key: U;
  value: Date | undefined;
  onSelect: Dispatch<SetStateAction<Date | undefined>>;
}

export function DatePickerForm({
  value,
  onSelect,
}: IDatePicker<any, "dateofbirth">) {
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
            {value ? format(value, "PPP") : <span>Pick a date</span>}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onSelect}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
