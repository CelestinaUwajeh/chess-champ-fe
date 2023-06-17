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

const formSchema = z
  .object({
    fullname: z.string().min(2).max(50),
    email: z.string().email("This is not a valid email.").nonempty(),
    phonenumber: z.string(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long.")
      .nonempty(),
    cpassword: z
      .string()
      .min(8, "Password must be at least 8 characters long.")
      .nonempty(),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Passwords do not match.",
    path: ["cpassword"],
  });

type FormSchema = z.infer<typeof formSchema>;

const ParentForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phonenumber: "",
      password: "",
      cpassword: "",
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
          name="fullname"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input placeholder="Enter phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullname"
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
        <FormField
          control={form.control}
          name="fullname"
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
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="Confirm your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-6">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">
            By signing up to Chess Champs, you agree to our{" "}
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
          Sign Up
        </AppButton>
      </div>
    </Form>
  );
};

export default ParentForm;
