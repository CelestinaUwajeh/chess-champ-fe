import useSWR from "swr";

import { getStudents } from "@/services/endpoints/parents";

export const useFetchStudents = <T>() => {
  const fetcher = async () => {
    const response = await getStudents();
    return response.items;
  };
  const { data, error, mutate, isLoading, isValidating } = useSWR(
    "parents/students",
    fetcher
  );

  return {
    data: data as T,
    isLoading,
    isValidating,
    isError: error,
    mutate,
  };
};
