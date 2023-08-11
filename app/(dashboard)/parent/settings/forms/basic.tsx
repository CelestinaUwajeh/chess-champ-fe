"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { parentBasicFormSchema } from "@/utils/form-schemas";

type FormSchema = z.infer<typeof parentBasicFormSchema>;

const BasicForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(parentBasicFormSchema),
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

export default BasicForm;
