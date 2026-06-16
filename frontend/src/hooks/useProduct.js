import api from "../services/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const res = await api.get("/products");
  return res.data;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
