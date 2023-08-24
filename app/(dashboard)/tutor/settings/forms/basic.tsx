"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BsPencil } from "react-icons/bs";

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
import { DatePickerForm } from "@/app/(auth)/signup/tutor/tutor-form/date-picker";
import { useState } from "react";
import { tutorBasicFormSchema } from "@/utils/form-schemas";
import { AiFillStar } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

type FormSchema = z.infer<typeof tutorBasicFormSchema>;

const Basic = () => {
  const [dateofbirth, setDateofbirth] = useState<Date>();
  const form = useForm<FormSchema>({
    resolver: zodResolver(tutorBasicFormSchema),
    defaultValues: {
      full_name: "",
      phone_number: "",
      email: "",
    },
  });
  const onSubmit = async (values: FormSchema) => {
    console.log({ values });
  };

  return (
    <div>
      <p className="mb-6 font-medium text-lg">Basic information</p>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className=" h-24 w-24 aspect-square rounded-full relative">
            <FaUserCircle className="h-full w-full text-main" />
            <div className="flex items-center justify-center h-9 w-9 aspect-square rounded-full absolute bottom-0 right-0 bg-bgPink">
              <BsPencil className="text-main" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span>Ratings</span>
            <AiFillStar className="text-main" />
            <span>3.0</span>
          </div>
        </div>
        <AppButton variant="secondary" size="medium" width="w-[134px]">
          Reset Availability
        </AppButton>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-normal">Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter fullname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="user_name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-normal">User name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date_of_birth"
            render={({ field }) => (
              <FormItem className="flex-1 flex flex-col">
                <FormLabel className="mt-2 mb-[3px]">Date of birth</FormLabel>
                <DatePickerForm
                  field={field}
                  key="date_of_birth"
                  value={dateofbirth}
                  onSelect={setDateofbirth}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-normal">Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-normal">Email address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex mt-7">
            <AppButton
              type="submit"
              variant="primary"
              size="medium"
              width="w-[134px]"
              disabled
            >
              Save changes
            </AppButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Basic;
