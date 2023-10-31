"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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
import { catchError, tutorRegistrationApi } from "@/services/endpoints/auth";
import { tutorCompleteRegFormSchema } from "@/utils/form-schemas";
import { showToast } from "@/utils";
import { USER_ROLE } from "@/utils/types";
import Popover from "@/components/pop-over";
import ModalContent from "../tutor-form/modal-content";

type FormSchema = z.infer<typeof tutorCompleteRegFormSchema>;

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

const TutorRegForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  const form = useForm<FormSchema>({
    resolver: zodResolver(tutorCompleteRegFormSchema),
    defaultValues: {
      user_name: "",
      password: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);
  const onSubmit = async (values: FormSchema) => {
    setLoading(true);
    try {
      await tutorRegistrationApi<LoginResponseDto>({
        params: { token: token ?? "", ...values },
      });
      setOpenPopover(true);
    } catch (error) {
      const { status, error: err } = catchError(error);
      showToast({ message: String(err), type: status });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="bg-white mx-auto max-w-[827px] p-3 lg:p-14 mt-10 font-mont rounded-xl">
      <h4 className="text-black font-bold text-base lg:text-2xl mb-4">
        Welcome to Chess Champs
      </h4>
      <p className="mb-8">Complete registration</p>
      <Form {...form}>
        <Popover
          open={openPopover}
          setOpen={() => {
            form.reset();
            setOpenPopover(false);
          }}
          displayCloseIcon={false}
        >
          <ModalContent
            description="Signup Successful"
            buttonText="Login"
            onButtonClick={() => {
              router.push("signin");
              setOpenPopover(false);
            }}
          />
        </Popover>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="user_name"
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
            <Link
              href="/forgot-password"
              className="text-main text-sm underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="flex justify-center mt-10">
            <AppButton
              type="submit"
              variant="primary"
              size="medium"
              width="w-[134px]"
              loading={loading}
              disabled={loading}
            >
              Sign In
            </AppButton>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default TutorRegForm;
