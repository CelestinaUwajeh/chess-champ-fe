import * as z from "zod";
export const parentFormSchema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  user_name: z.string().min(2).max(50),
  email: z.string().email("This is not a valid email.").nonempty(),
  phone_number: z.string(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .nonempty(),
});

export const studentFormSchema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  user_name: z.string().min(2).max(50),
  email: z.string().email("This is not a valid email.").nonempty(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .nonempty(),
  date_of_birth: z.string().nonempty(),
  gender: z.string().nonempty(),
  phone_number: z.string(),
});
