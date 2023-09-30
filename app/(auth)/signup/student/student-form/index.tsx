"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

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

import { DatePickerForm } from "../../tutor/tutor-form/date-picker";
import { catchError, parentStudentSignUpApi } from "@/services/endpoints/auth";
import { Gender, PlatformRoles, Prettify } from "@/utils/types";
import MobileInput from "@/components/phone-input";
import { studentFormSchema } from "@/utils/form-schemas";
import Popover from "@/components/pop-over";
import ModalContent from "./modal-content";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/slices/auth";

export type StudentFormSchema = Prettify<
  Omit<z.infer<typeof studentFormSchema>, "gender"> & {
    gender: Gender;
  }
>;

const StudentForm = ({
  isModal = false,
  modalTitle,
  onSucess,
  onError,
}: {
  isModal?: boolean;
  modalTitle?: string;
  onSucess?: () => void;
  onError?: () => void;
}) => {
  const user = useAppSelector(selectUser);
  const form = useForm<StudentFormSchema>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: isModal ? user?.email : "",
      password: "",
      gender: Gender.MALE,
      phone_number: "",
      user_name: "",
      date_of_birth: "",
    },
  });
  const [openPopover, setOpenPopover] = useState(false);
  const [apiRunning, setApiRunning] = useState(false);
  const onSubmit = async (values: StudentFormSchema) => {
    setApiRunning(true);
    try {
      await parentStudentSignUpApi({
        params: values,
        url: isModal ? "parents/students" : "students",
      });
      if (isModal) {
        onSucess?.();
        return;
      }
      setOpenPopover(true);
    } catch (error) {
      isModal ? onError?.() : catchError(error);
    } finally {
      setApiRunning(false);
    }
  };
  return (
    <Form {...form}>
      <Popover
        open={openPopover}
        setOpen={() => {
          form.reset();
          setOpenPopover(false);
        }}
        displayCloseIcon={false}
      >
        <ModalContent />
      </Popover>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={isModal ? "max-h-[calc(100vh-120px)] overflow-y-auto" : ""}
      >
        {isModal ? (
          <h2 className="text-lg font-bold mb-6">{modalTitle}</h2>
        ) : null}
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
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Create user name" {...field} />
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
                <FormLabel>Parent Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter parent email" {...field} />
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
                  <Input placeholder="Create password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col lg:flex-row gap-6">
            <FormField
              control={form.control}
              name="date_of_birth"
              render={({ field }) => (
                <FormItem className="flex-1 flex flex-col">
                  <FormLabel className="mt-2 mb-[3px]">Date of birth</FormLabel>
                  <DatePickerForm
                    field={field}
                    key="date_of_birth"
                    value={new Date(field?.value)}
                    onSelect={(date) => {
                      form.setValue(
                        "date_of_birth",
                        new Date(date).toISOString()
                      );
                    }}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange as (value: string) => void}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Enter gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {["Male", "Female"].map((gender) => (
                        <SelectItem key={gender} value={gender}>
                          {gender}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        {!isModal ? (
          <div className="mt-6">
            <div className="flex space-x-2">
              <Checkbox id="terms" className="mt-[2px]" />
              <Label htmlFor="terms" className="font-normal leading-normal">
                By submitting your application, you agree to our{" "}
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
        ) : null}
        <div className="flex justify-center mt-10">
          <AppButton
            type="submit"
            variant="primary"
            size="medium"
            width="w-[134px]"
            loading={apiRunning}
          >
            Submit
          </AppButton>
        </div>
      </form>
    </Form>
  );
};

export default StudentForm;
