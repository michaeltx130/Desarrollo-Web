import "./App.css";
import UserItem from "./components/UserItem.tsx";
import useGetUsers from "./hooks/useGetUsers.tsx";
import useDeleteUser from "./hooks/useDeleteUser.tsx";
import type { User } from "./types/User.type";
import AddEditForm from "./components/AddEditForm.tsx";
import useCreateEditUser from "./hooks/useCreateEditUser.tsx";
import { useState } from "react";

function App() {
  const {
    users,
    setUsers,
    addUserToList,
    isLoading: isFetchingUsers,
  } = useGetUsers();

  const { createUser, isLoading: isSubmitLoading } = useCreateEditUser();
  const [update, setUpdate] = useState<User | null>(null);
  const { deleteUser } = useDeleteUser(users, setUsers);

  const handleOnSubmit = async (user: User) => {
    if (update) {
      const updatedUsers = users.map((u) =>
        u.id === user.id ? { ...u, ...user } : u
      );
      setUsers(updatedUsers);
      setUpdate(null);
    } else {
      const newUser = await createUser({
        user: {
          ...user,
          created: new Date(),
        },
      });
      if (newUser) {
        addUserToList(newUser.user);
      }
    }
  };

  const handleEdit = (user: User) => {
    setUpdate(user);
  };

  const handleCancelUpdate = () => {
    setUpdate(null);
  };

  return (
    <div className="app-container">
      <div className="form-section">
        <h2>CRUD de usuarios</h2>
        <AddEditForm
          onSubmit={handleOnSubmit}
          loading={isSubmitLoading}
          update={update}
          onCancelUpdate={handleCancelUpdate}
        />
      </div>
      <div className="table-section">
        {isFetchingUsers && <p>Cargando...</p>}
        {!isFetchingUsers && (
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NOMBRE(S)</th>
                <th>CORREO</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserItem
                  key={user.id}
                  user={user}
                  onEdit={handleEdit}
                  onDelete={deleteUser}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
