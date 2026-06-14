import { useMutation } from "@tanstack/react-query";
import api from "../services/axiosInstance";

const loginUser = async (userData) => {
  const response = await api.post("/users/login", userData);

  return response.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};
