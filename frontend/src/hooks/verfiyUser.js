import { useQuery } from "@tanstack/react-query";
import api from "../services/axiosInstance";

export const verifyUser = async () => {
  try {
    const respo = await api.get("/users/verify");
    return respo.data;
  } catch (error) {
    console.error("Token verification failed:", error);
    throw error;
  }
};

export const userverifyUser = async () => {
  return useQuery({
    queryKey: ["verifyUser"],
    queryFn: verifyUser,
    retry: false, // Disable retries to avoid multiple failed attempts
    refetchOnWindowFocus: false, // Disable refetching on window focus
  });
};
