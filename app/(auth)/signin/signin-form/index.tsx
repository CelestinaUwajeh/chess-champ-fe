"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
import { loginFormSchema } from "@/utils/form-schemas";
import { showToast } from "@/utils";
import { USER_ROLE } from "@/utils/types";
import { useAppDispatch } from "@/redux/hooks";
import { setUserLoginDetails } from "@/redux/slices/auth";

type FormSchema = z.infer<typeof loginFormSchema>;

export interface LoginResponseDto {
  access_token: string;
  email: string;
  first_name: string;
  id: string;
  last_login: string;
  last_name: string;
  phone_number: string;
  user_name: string;
  user_role: USER_ROLE;
}

const SigninForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
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
      const response = await loginApi<LoginResponseDto>({
        params: values,
      });
      showToast({ message: "Login succesful", type: "success" });
      sessionStorage.setItem("access_token", response.access_token);
      dispatch(setUserLoginDetails(response));
      router.push(
        `${
          response?.user_role ? response.user_role.toLowerCase() : "parent"
        }/dashboard`
      );
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
                <Input
                  placeholder="Enter Password"
                  {...field}
                  type="password"
                />
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
