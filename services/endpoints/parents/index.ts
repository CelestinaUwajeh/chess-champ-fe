import ChessChamps from "@/services/axios";

export const getParent = async () => {};

export const getStudents = async () => {
  const resp = await ChessChamps.get("/parents/students");
  return resp.data;
};

export const getStudent = async (id: string) => {
  const resp = await ChessChamps.get(`/parents/students/${id}`);
  return resp.data;
};

export const editBasicInfo = async (payload: FormData) => {
  const resp = await ChessChamps.get(`/parents/me`, { params: payload });
  return resp.data;
};

export const deleteAccount = async () => {
  const resp = await ChessChamps.delete("/parents/me");
  return resp.data;
};
