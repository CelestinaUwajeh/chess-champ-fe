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

export type TutorType = {
  date_of_birth: string;
  gender: Gender;
  total_students: number;
  total_classes: number;
  level_of_experience: "Beginner" | "Intermediate" | "Advanced";
};

export type StudentType = {
  id: string;
  gender: string;
  base_user: {
    first_name: string;
    last_name: string;
    profile_picture_url: string;
    created_at: string;
    email: string;
    id: string;
    phone_number: string;
    user_name: string;
    user_role: string;
    last_login: string;
    last_active: string;
    tutor: TutorType;
  };
};
