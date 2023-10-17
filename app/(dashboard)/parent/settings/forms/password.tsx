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
import { parentPasswordFormSchema } from "@/utils/form-schemas";
import { useState } from "react";
import { catchError, changePassword } from "@/services/endpoints/auth";
import { showToast } from "@/utils";

type FormSchema = z.infer<typeof parentPasswordFormSchema>;

const PasswordForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(parentPasswordFormSchema),
    defaultValues: {
      current_password: "",
      new_password: "",
      confirm_new_password: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const onSubmit = async (values: FormSchema) => {
    setLoading(true);
    try {
      await changePassword({
        params: {
          old_password: values.current_password,
          new_password: values.new_password,
        },
      });
      showToast({ message: "Password successfully changed", type: "success" });
    } catch (error) {
      const { status, error: err } = catchError(error);
      showToast({ message: String(err), type: status });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <p className="mb-6 font-medium text-lg">Password</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="current_password"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-normal">Current password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter current password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="new_password"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-normal">New password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter new password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_new_password"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-normal">Re-enter password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Re-enter new password"
                    {...field}
                  />
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
              Change password
            </AppButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PasswordForm;
