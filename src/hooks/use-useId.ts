import { useQuery } from "@tanstack/react-query";
import {authService} from "../services/authService";


const fetchById= async () => {
      const res = await authService.getUserById(id);
      return res.data.data;
    }
export const useUserById = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: fetchById,
    enabled: !!id,
  });
};
