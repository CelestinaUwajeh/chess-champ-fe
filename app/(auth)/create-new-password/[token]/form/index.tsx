"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import AppButton from "@/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createNewPasswordFormSchema } from "@/utils/form-schemas";
import { catchError, resetPassword } from "@/services/endpoints/auth";
import { showToast } from "@/utils";
import { useRouter } from "next/navigation";

type FormSchema = z.infer<typeof createNewPasswordFormSchema>;

const CreateNewPasswordForm = ({ token }: { token: string }) => {
  const router = useRouter();
  const form = useForm<FormSchema>({
    resolver: zodResolver(createNewPasswordFormSchema),
    defaultValues: {
      password: "",
      cpassword: "",
    },
  });
  const [apiRunning, setApiRunning] = useState(false);
  const onSubmit = async (values: FormSchema) => {
    setApiRunning(true);
    try {
      await resetPassword({
        params: { token, new_password: values.password },
      });
      router.push("/signin");
    } catch (error) {
      const { status, error: err } = catchError(error);
      showToast({ message: String(err), type: status });
    } finally {
      setApiRunning(false);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cpassword"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Re-enter password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <AppButton
          type="submit"
          variant="primary"
          size="medium"
          width="w-[134px]"
          loading={apiRunning}
        >
          Reset Password
        </AppButton>
      </form>
    </Form>
  );
};

export default CreateNewPasswordForm;
