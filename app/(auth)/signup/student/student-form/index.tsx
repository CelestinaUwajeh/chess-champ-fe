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
import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { DatePickerForm } from "../../tutor/tutor-form/date-picker";

const formSchema = z.object({
  fullname: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  parentemail: z.string().email("This is not a valid email.").nonempty(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .nonempty(),
  dateofbirth: z.string().nonempty(),
  gender: z.string().nonempty(),
});

export type StudentFormSchema = z.infer<typeof formSchema>;

const StudentForm = () => {
  const [dateofbirth, setDateofbirth] = useState<Date>();
  const form = useForm<StudentFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      parentemail: "",
      password: "",
      dateofbirth: "",
      gender: "",
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
          name="username"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Create user name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="parentemail"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Parent Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter parent email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Create password" {...field} />
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

export default StudentForm;
