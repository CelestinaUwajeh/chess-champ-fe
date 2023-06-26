import ChessChamps from "@/services/axios";
import {
  IParentSignUpDto,
  IStudentSignUpDto,
  ITutorSignUpDto,
} from "@/utils/types";
import { AxiosError } from "axios";

export const loginApi = async ({
  params,
}: {
  params: { username: string; password: string };
}) => {
  const resp = await ChessChamps.post("/login", params);
  return resp.data.data;
};

type IParentStudentSignUpApi = {
  params: IStudentSignUpDto | IParentSignUpDto;
  url: string;
};

export const catchError = (
  err: unknown
): { data: any; status: "error"; error: string } => {
  let msg;
  if (err instanceof AxiosError) {
    const serverErrorMsg = err.response?.data?.message;
    if (serverErrorMsg) msg = serverErrorMsg;
    else msg = err.message;
  } else msg = String(err);
  return { data: null, status: "error", error: msg };
};

export const parentStudentSignUpApi = async ({
  params,
  url,
}: IParentStudentSignUpApi) => {
  const resp = await ChessChamps.post(url, params);
  return resp.data.data;
};

type ITutorSignUpApi = {
  params: ITutorSignUpDto;
};

export const tutorSignUpApi = async ({ params }: ITutorSignUpApi) => {
  const formData = new FormData();
  formData.append("first_name", params.first_name);
  formData.append("last_name", params.last_name);
  formData.append("email", params.email);
  formData.append("date_of_birth", params.date_of_birth);
  formData.append("gender", params.gender);
  formData.append("cv", JSON.stringify(params.cv));

  const resp = await ChessChamps.post("/signup", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return resp.data.data;
};

export const sendPasswordInstruction = async ({
  params,
}: {
  params: { email: string };
}) => {
  const resp = await ChessChamps.post("/auth/send-reset-password-instruction", {
    params,
  });
  return resp.data;
};

export const resetPassword = async ({
  params,
}: {
  params: { token: string; new_password: string };
}) => {
  const resp = await ChessChamps.post("/auth/reset-password", params);
  return resp.data;
};
