import type { User } from "../types/User.type";

type UserItemProps = {
  user: User;
  onEdit?: (user: User) => void;
  onDelete?: (id: User["id"]) => void;
};

const UserItem = ({ user, onEdit, onDelete }: UserItemProps) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button
          className="action-btn edit"
          title="Editar"
          onClick={() => onEdit && onEdit(user)}
        >
          ✏️
        </button>
        <button
          className="action-btn delete"
          title="Eliminar"
          onClick={() => onDelete && onDelete(user.id)}
        >
          🗑️
        </button>
      </td>
    </tr>
  );
};

export default UserItem;
