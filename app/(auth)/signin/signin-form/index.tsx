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
import { Switch } from "@/components/ui/switch";
import { catchError, loginApi } from "@/services/endpoints/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginFormSchema } from "@/utils/form-schemas";
import { showToast } from "@/utils";

type FormSchema = z.infer<typeof loginFormSchema>;

const SigninForm = () => {
  const route = useRouter();
  const form = useForm<FormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const [logginIn, setLoggingIn] = useState(false);
  const onSubmit = async (values: FormSchema) => {
    setLoggingIn(true);
    try {
      await loginApi({
        params: values,
      });
      route.push("/dashboard");
    } catch (error) {
      const { status, error: err } = catchError(error);
      showToast({ message: String(err), type: status });
    } finally {
      setLoggingIn(false);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} />
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
                <Input placeholder="Enter Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center space-x-2">
            <Switch id="remember-me" />
            <Label htmlFor="remember-me">Remember me</Label>
          </div>
          <Link href="/forgot-password" className="text-main text-sm underline">
            Forgot password?
          </Link>
        </div>
        <div className="flex justify-center mt-10">
          <AppButton
            type="submit"
            variant="primary"
            size="medium"
            width="w-[134px]"
            loading={logginIn}
          >
            Sign In
          </AppButton>
        </div>
      </form>
    </Form>
  );
};

export default SigninForm;
