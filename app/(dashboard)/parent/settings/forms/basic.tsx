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
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/slices/auth";
import { useState } from "react";
import { convertToFormData, showToast } from "@/utils";
import { editBasicInfo } from "@/services/endpoints/parents";
import { catchError } from "@/services/endpoints/auth";

type FormSchema = z.infer<typeof parentBasicFormSchema>;

const BasicForm = () => {
  const user = useAppSelector(selectUser);
  const form = useForm<FormSchema>({
    resolver: zodResolver(parentBasicFormSchema),
    defaultValues: {
      first_name: user?.first_name ?? "",
      last_name: user?.last_name ?? "",
      phone_number: user?.phone_number ?? "",
      email: user?.email ?? "",
    },
  });
  const [loading, setLoading] = useState(false);
  const onSubmit = async (values: FormSchema) => {
    setLoading(true);
    const formData = convertToFormData(values);
    try {
      await editBasicInfo(formData);
      showToast({ message: "Edit successful", type: "success" });
    } catch (error) {
      const { status, error: err } = catchError(error);
      showToast({ message: String(err), type: status });
    } finally {
      setLoading(false);
    }
    console.log({ values });
  };
  return (
    <div>
      <p className="mb-6 font-medium text-lg">Basic information</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-normal">First name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter firstname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-normal">Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter last name" {...field} />
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
              disabled={loading}
              loading={loading}
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
