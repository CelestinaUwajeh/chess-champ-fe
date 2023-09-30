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
