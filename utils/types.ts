export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export interface ILoginDto {
  username: string;
  password: string;
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum PlatformRoles {
  STUDENT = "STUDENT",
  ADMIN = "ADMIN",
  TUTOR = "TUTOR",
  PARENT = "PARENT",
}

export interface IStudentSignUpDto {
  date_of_birth: string;
  gender: Gender;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  user_name: string;
  user_role: PlatformRoles.STUDENT;
  password: string;
}

export interface IParentSignUpDto {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  user_name: string;
  password: string;
}

export interface ITutorSignUpDto {
  cv: any;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
  gender: Gender;
}

export enum USER_ROLE {
  STUDENT = "STUDENT",
  ADMIN = "ADMIN",
  TUTOR = "TUTOR",
  PARENT = "PARENT",
}
