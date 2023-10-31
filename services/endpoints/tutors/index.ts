import ChessChamps from "@/services/axios";

export const getTutor = async () => {
  const resp = await ChessChamps.get("/tutors/me");
  return resp.data;
};

export const getTutorStudents = async () => {
  const resp = await ChessChamps.get("/tutors/students");
  return resp.data;
};

export const getTutorSessions = async () => {
  const resp = await ChessChamps.get("/schedules/tutors/sessions");
  return resp.data;
};
