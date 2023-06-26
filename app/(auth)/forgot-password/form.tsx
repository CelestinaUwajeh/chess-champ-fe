"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
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
import { catchError, sendPasswordInstruction } from "@/services/endpoints/auth";
import { showToast } from "@/utils";

const formSchema = z.object({
  email: z.string().nonempty(),
});

type FormSchema = z.infer<typeof formSchema>;

const ForgotForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const [apiRunning, setApiRunning] = useState(false);
  const [success, setSuccess] = useState(false);
  const onSubmit = async (values: FormSchema) => {
    setApiRunning(true);
    try {
      await sendPasswordInstruction({
        params: values,
      });
      setSuccess(true);
    } catch (error) {
      const { status, error: err } = catchError(error);
      showToast({ message: String(err), type: status });
    } finally {
      setApiRunning(false);
    }
  };
  return (
    <Form {...form}>
      {!success ? (
        <form className="flex flex-col gap-6 w-full">
          <FormField
            control={form.control}
            name="email"
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
          <AppButton
            type="submit"
            variant="primary"
            size="medium"
            width="w-[134px]"
          >
            Reset Password
          </AppButton>
        </form>
      ) : (
        <div className="flex flex-col gap-2 text-center text-sm lg:text-base">
          <p>
            We have sent a mail to{" "}
            <span className="font-semibold">${form.getValues().email}</span>
          </p>
          <p>Follow the link in that message to reset your password.</p>
        </div>
      )}
    </Form>
  );
};

export default ForgotForm;
