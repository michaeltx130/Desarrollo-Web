import { useEffect, useState } from "react";
import type { User, UserResponse } from "../types/User.type";
import HttpClient from "../utils/HttpClient";

const httpClient = new HttpClient();

const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = () => {
    setIsLoading(true);
    httpClient
      .get("users/all")
      .then((response) => {
        response
          .json()
          .then((data: UserResponse) => {
            setUsers(data.users);
          })
          .catch(() => setUsers([]))
          .finally(() => setIsLoading(false));
      })
      .catch(() => {
        setUsers([]);
        setIsLoading(false);
      });
  };

  const addUserToList = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    users,
    setUsers,
    getUsers,
    addUserToList,
    isLoading,
  };
};

export default useGetUsers;
