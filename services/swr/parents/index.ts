import useSWR from "swr";

import { getStudent, getStudents } from "@/services/endpoints/parents";

export const useFetchStudents = <T>() => {
  const fetcher = async () => {
    const response = await getStudents();
    return response.items;
  };
  const { data, error, mutate, isLoading, isValidating } = useSWR(
    "parents/students",
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

export const useFetchStudent = <T>(id: string) => {
  const fetcher = async () => {
    const response = await getStudent(id);
    return response;
  };
  const { data, error, mutate, isLoading, isValidating } = useSWR(
    `parents/students${id}`,
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
