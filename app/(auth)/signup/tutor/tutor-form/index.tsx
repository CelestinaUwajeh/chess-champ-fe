"use client";

import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { AiOutlineCloudUpload } from "react-icons/ai";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePickerForm } from "./date-picker";
import FileLabel from "./file-label";
import { catchError, tutorSignUpApi } from "@/services/endpoints/auth";
import { Gender, Prettify } from "@/utils/types";
import Popover from "@/components/pop-over";
import ModalContent from "./modal-content";
import MobileInput from "@/components/phone-input";
import { tutorFormSchema } from "@/utils/form-schemas";

export type TutorFormSchema = Prettify<
  Omit<z.infer<typeof tutorFormSchema>, "gender"> & {
    gender: Gender;
  }
>;

const TutorForm = () => {
  const form = useForm<TutorFormSchema>({
    resolver: zodResolver(tutorFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      date_of_birth: "",
      gender: Gender.FEMALE,
      cv: undefined,
    },
  });

  const router = useRouter();

  const [filename, setFileName] = useState("");
  const [openPopover, setOpenPopover] = useState(false);
  const [apiRunning, setApiRunning] = useState(false);

  const onSubmit = async (values: TutorFormSchema) => {
    setApiRunning(true);
    try {
      await tutorSignUpApi({
        params: values as Required<TutorFormSchema>,
      });
      setOpenPopover(true);
    } catch (error) {
      catchError(error);
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
        <ModalContent
          description="Your application has been received and is being reviewed, we will reach
        out to you shortly. Thank you."
          buttonText="Okay"
          onButtonClick={() => {
            router.push("/");
            setOpenPopover(false);
          }}
        />
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
          <FormField
            control={form.control}
            name="cv"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem className="flex-1">
                <FormLabel>Upload CV</FormLabel>
                <FormControl>
                  <div className="">
                    <FileLabel htmlFor="cv" className="flex items-center gap-4">
                      <div className="bg-[rgba(1,1,1,0.29)] py-2 px-[10px] flex items-center gap-2 rounded-[8px]">
                        <p className="text-white text-sm">Upload file</p>
                        <AiOutlineCloudUpload className="text-white" />
                      </div>
                      <p className="text-black">{filename ? filename : ""}</p>
                    </FileLabel>
                    <Input
                      id="cv"
                      type="file"
                      accept=".pdf"
                      value={""}
                      onChange={(e) => {
                        setFileName(e.target.files?.[0].name!);
                        onChange(e.target.files?.[0]);
                      }}
                      {...field}
                      className="hidden"
                    />
                  </div>
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

export default TutorForm;
