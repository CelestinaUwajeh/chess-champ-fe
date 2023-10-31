import useSWR from "swr";

import {
  getTutor,
  getTutorSessions,
  getTutorStudents,
} from "@/services/endpoints/tutors";

export const useFetchTutor = <T>() => {
  const fetcher = async () => {
    const response = await getTutor();
    return response.items;
  };
  const { data, error, mutate, isLoading, isValidating } = useSWR(
    "tutors/students",
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    data: data as T,
    isLoading,
    isValidating,
    isError: error,
    mutate,
  };
};

export const useFetchTutorSessions = <T>() => {
  const fetcher = async () => {
    const response = await getTutorSessions();
    return response.items;
  };
  const { data, error, mutate, isLoading, isValidating } = useSWR(
    "/schedules/tutors/sessions",
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    data: data as T,
    isLoading,
    isValidating,
    isError: error,
    mutate,
  };
};

export const useFetchTutorStudents = <T>() => {
  const fetcher = async () => {
    const response = await getTutorStudents();
    return response.items;
  };
  const { data, error, mutate, isLoading, isValidating } = useSWR(
    "/tutors/students",
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    data: data as T,
    isLoading,
    isValidating,
    isError: error,
    mutate,
  };
};
