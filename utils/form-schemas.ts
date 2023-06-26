import * as z from "zod";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

const passwordMsg =
  "Password must have a minimum of 8 characters with at least one of uppercase, lowercase, number and symbol characters";

export const loginFormSchema = z.object({
  username: z.string().nonempty(),
  password: z.string().regex(passwordRegex, passwordMsg),
});

export const parentFormSchema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  user_name: z.string().min(2).max(50),
  email: z.string().email("This is not a valid email.").nonempty(),
  phone_number: z.string(),
  password: z.string().regex(passwordRegex, passwordMsg),
});

export const studentFormSchema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  user_name: z.string().min(2).max(50),
  email: z.string().email("This is not a valid email.").nonempty(),
  password: z.string().regex(passwordRegex, passwordMsg),
  date_of_birth: z.string().nonempty(),
  gender: z.string().nonempty(),
  phone_number: z.string(),
});

export const createNewPasswordFormSchema = z
  .object({
    password: z.string().regex(passwordRegex, passwordMsg),
    cpassword: z.string().regex(passwordRegex, passwordMsg),
  })
  .refine((data) => data.password === data.cpassword, "Passwords must match");
