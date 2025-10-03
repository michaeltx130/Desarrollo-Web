import type { User } from "../types/User.type";
import HttpClient from "../utils/HttpClient";

const httpClient = new HttpClient();

const useDeleteUser = (users: User[], setUsers: (users: User[]) => void) => {
  const deleteUser = async (id: User["id"]) => {
    try {
      await httpClient.delete(`users/delete/${id}`);
      const filteredUsers = users.filter((user) => user.id !== id);
      setUsers(filteredUsers);
    } catch (error) {
      console.error("Error eliminando usuario:", error);
      alert("No se pudo eliminar el usuario. Intente nuevamente.");
    }
  };

  return { deleteUser };
};

export default useDeleteUser;