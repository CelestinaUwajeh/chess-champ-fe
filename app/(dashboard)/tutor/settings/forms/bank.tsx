"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { accountFormSchema } from "@/utils/form-schemas";

type FormSchema = z.infer<typeof accountFormSchema>;

const Bank = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      account_name: "",
      account_no: "",
      bank_name: "",
      account_type: "",
    },
  });
  const onSubmit = async (values: FormSchema) => {
    console.log({ values });
  };

  return (
    <div>
      <p className="mb-6 font-medium text-lg">Bank Details</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="account_name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-normal">Account Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter account name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="account_no"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-normal">Account No.</FormLabel>
                <FormControl>
                  <Input placeholder="Enter account number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bank_name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-normal">Bank Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter bank name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="account_type"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-normal">Account Type</FormLabel>
                <FormControl>
                  <Input placeholder="Enter account type" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex mt-7">
            <AppButton
              type="submit"
              variant="primary"
              size="medium"
              width="w-[134px]"
              disabled
            >
              Save changes
            </AppButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Bank;
