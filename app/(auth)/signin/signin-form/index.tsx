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

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

const formSchema = z.object({
  username: z.string().nonempty(),
  password: z
    .string()
    .regex(
      passwordRegex,
      "Password must have a minimum of 8 characters with at least one of uppercase, lowercase, number and symbol characters"
    ),
});

type FormSchema = z.infer<typeof formSchema>;

const SigninForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <div>
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
      </div>
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
        >
          Sign In
        </AppButton>
      </div>
    </Form>
  );
};

export default SigninForm;
