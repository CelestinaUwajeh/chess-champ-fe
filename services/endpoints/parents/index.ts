import ChessChamps from "@/services/axios";

export const getParent = async () => {};

export const getStudents = async () => {
  const resp = await ChessChamps.get("/parents/students");
  return resp.data;
};
