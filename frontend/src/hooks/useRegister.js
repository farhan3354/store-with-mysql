import { useMutation } from "@tanstack/react-query";
import api from "../services/axiosInstance";

const registerUser = async (userData) => {
  const response = await api.post("/users/register", userData);
  return response.data;
};

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};
