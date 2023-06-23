"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePickerForm } from "./date-picker";
import { useState } from "react";
import FileLabel from "./file-label";
import { AiOutlineCloudUpload } from "react-icons/ai";

const formSchema = z.object({
  fullname: z.string().min(2).max(50),
  email: z.string().email("This is not a valid email.").nonempty(),
  phonenumber: z.string(),
  dateofbirth: z.string().nonempty(),
  gender: z.string().nonempty(),
  cv: z.string(),
});

export type FormSchema = z.infer<typeof formSchema>;

const TutorForm = () => {
  const [dateofbirth, setDateofbirth] = useState<Date>();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phonenumber: "",
      dateofbirth: "",
      gender: "",
      cv: "",
    },
  });

  return (
    <Form {...form}>
      <div className="flex flex-col gap-6">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder="Enter first name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input placeholder="Enter phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col lg:flex-row gap-6">
          <FormField
            control={form.control}
            name="dateofbirth"
            render={({ field }) => (
              <FormItem className="flex-1 flex flex-col">
                <FormLabel className="mt-2 mb-[3px]">Date of birth</FormLabel>
                <DatePickerForm
                  field={field}
                  key="dateofbirth"
                  value={dateofbirth}
                  onSelect={setDateofbirth}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Enter gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {["Male", "Female"].map((gender) => (
                      <SelectItem key={gender} value={gender}>
                        {gender}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="cv"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Upload CV</FormLabel>
              <FormControl>
                <div className="">
                  <FileLabel htmlFor="cv">
                    <div className="bg-[rgba(1,1,1,0.29)] py-2 px-[10px] flex items-center gap-2 rounded-[8px]">
                      <p className="text-white text-sm">Upload file</p>
                      <AiOutlineCloudUpload className="text-white" />
                    </div>
                  </FileLabel>
                  <Input id="cv" type="file" {...field} className="hidden" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-6">
        <div className="flex space-x-2">
          <Checkbox id="terms" className="mt-[2px]" />
          <Label htmlFor="terms" className="font-normal leading-normal">
            By submitting your application, you agree to our{" "}
            <Link href="terms" className="text-main">
              Terms of use
            </Link>{" "}
            and{" "}
            <Link href="policy" className="text-main">
              Privacy Policy
            </Link>
            .
          </Label>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <AppButton
          type="submit"
          variant="primary"
          size="medium"
          width="w-[134px]"
        >
          Submit
        </AppButton>
      </div>
    </Form>
  );
};

export default TutorForm;
