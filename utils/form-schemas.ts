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
  date_of_birth: z.string(),
  gender: z.string().nonempty(),
  phone_number: z.string(),
});

export const parentStudentFormSchema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  user_name: z.string().min(2).max(50),
  email: z.string().email("This is not a valid email.").nonempty(),
  password: z.string().regex(passwordRegex, passwordMsg),
  date_of_birth: z.string(),
  gender: z.string().nonempty(),
  phone_number: z.string(),
});

export const createNewPasswordFormSchema = z
  .object({
    password: z.string().regex(passwordRegex, passwordMsg),
    cpassword: z.string().regex(passwordRegex, passwordMsg),
  })
  .refine((data) => data.password === data.cpassword, "Passwords must match");

export const parentBasicFormSchema = z.object({
  full_name: z.string().trim(),
  phone_number: z.string(),
  email: z.string().email("This is not a valid email.").nonempty(),
});
export const parentPasswordFormSchema = z.object({
  current_password: z.string().regex(passwordRegex, passwordMsg),
  new_password: z.string().regex(passwordRegex, passwordMsg),
  confirm_new_password: z.string().regex(passwordRegex, passwordMsg),
});

export const tutorBasicFormSchema = z.object({
  full_name: z.string().trim(),
  user_name: z.string().trim(),
  date_of_birth: z.string().nonempty(),
  phone_number: z.string(),
  email: z.string().email("This is not a valid email.").nonempty(),
});

export const accountFormSchema = z.object({
  account_name: z.string().trim(),
  account_no: z.string().trim(),
  bank_name: z.string().trim(),
  account_type: z.string().trim(),
});
