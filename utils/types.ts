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

export enum LEVEL {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced",
}

export type TutorType = {
  date_of_birth: string;
  gender: Gender;
  total_students: number;
  total_classes: number;
  level_of_experience: LEVEL;
};

export type StudentPlan = {
  sessions_used: string;
  enrollment_date: string;
  is_active: boolean;
  progress_in_percent: number;
  pricing: {
    name: LEVEL;
  };
  sessions: string;
  id: string;
  created_by: string;
  created_at: string;
  updated_at: string;
  updated_by: string;
  deleted_at: string;
  deleted_by: string;
};

export type StudentType = {
  id: string;
  gender: string;
  created_at: string;
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
  student_plans: StudentPlan;
};
