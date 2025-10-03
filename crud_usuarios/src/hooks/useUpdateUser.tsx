import HttpClient from "../utils/HttpClient";
import type { User } from "../types/User.type";
import { useState } from "react";

const httpClient = new HttpClient();

const useUpdateUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const updateUser = async (user: User) => {
    setIsLoading(true);
    try {
      // 👇 Envolvemos el objeto en { user }
      const response = await httpClient.put(`users/update/${user.id}`, { user });
      const updatedUser = await response.json();
      setIsLoading(false);
      return updatedUser;
    } catch (error) {
      setIsLoading(false);
      console.error("Error actualizando usuario:", error);
      return null;
    }
  };

  return { updateUser, isLoading };
};

export default useUpdateUser;
