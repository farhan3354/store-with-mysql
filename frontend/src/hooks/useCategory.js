import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../services/axiosInstance";

const Category = async (userData) => {
  const response = await api.post("/categories", userData);
  return response.data;
};

export const useCategory = () => {
  return useMutation({
    mutationFn: Category,
  });
};

const getCategory = async () => {
  const res = await api.get("/categories/all");
  return res.data;
};

export const useGetCategory = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategory,
  });
};
