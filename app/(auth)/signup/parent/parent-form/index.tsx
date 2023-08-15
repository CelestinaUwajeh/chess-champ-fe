"use client";

import { useState } from "react";
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
import { catchError, parentStudentSignUpApi } from "@/services/endpoints/auth";
import { PlatformRoles } from "@/utils/types";
import { parentFormSchema } from "@/utils/form-schemas";
import MobileInput from "@/components/phone-input";
import Popover from "@/components/pop-over";
import ModalContent from "./modal-content";
import { showToast } from "@/utils";

type FormSchema = z.infer<typeof parentFormSchema>;

const ParentForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(parentFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      user_name: "",
      email: "",
      phone_number: "",
      password: "",
    },
  });
  const [openPopover, setOpenPopover] = useState(false);
  const [apiRunning, setApiRunning] = useState(false);
  const onSubmit = async (values: FormSchema) => {
    setApiRunning(true);
    try {
      await parentStudentSignUpApi({
        params: { user_role: PlatformRoles.PARENT, ...values },
        url: "users/parents",
      });
      setOpenPopover(true);
    } catch (error) {
      const { status, error: err } = catchError(error);
      showToast({ message: String(err), type: status });
    } finally {
      setApiRunning(false);
    }
  };

  return (
    <Form {...form}>
      <Popover
        isOverlayActive
        open={openPopover}
        setOpen={() => {
          form.reset();
          setOpenPopover(false);
        }}
        displayCloseIcon={false}
      >
        <ModalContent />
      </Popover>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <FormField
            control={form.control}
            name="first_name"
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
            name="last_name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter last name" {...field} />
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
                <FormLabel>User name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter user name" {...field} />
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
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <MobileInput field={field} />
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
            name="password"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Create password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-6">
          <div className="flex space-x-2">
            <Checkbox id="terms" className="mt-[2px]" />
            <Label htmlFor="terms" className="font-normal leading-normal">
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
            loading={apiRunning}
          >
            Sign Up
          </AppButton>
        </div>
      </form>
    </Form>
  );
};

export default ParentForm;
