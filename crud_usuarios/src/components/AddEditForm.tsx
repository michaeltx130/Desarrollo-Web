import { useEffect, useState } from "react";
import type { User } from "../types/User.type";

const formDefaultValues: User = {
  id: 0,
  email: "",
  name: "",
  created: "",
};

type AddEditFormProps = {
  onSubmit: (value: User) => void;
  loading?: boolean;
  update?: User | null;
  onCancelUpdate?: () => void;
};

const AddEditForm = ({
  onSubmit,
  loading,
  update,
  onCancelUpdate,
}: AddEditFormProps) => {
  const [formState, setFormState] = useState<User>(formDefaultValues);

  useEffect(() => {
    if (update) {
      setFormState(update);
    } else {
      setFormState(formDefaultValues);
    }
  }, [update]);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    onSubmit(formState);
    setFormState(formDefaultValues);
  };

  const handleInputChange = (key: keyof User) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormState({
        ...formState,
        [key]: event.target.value,
      });
    };
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Inserte su email"
        value={formState.email}
        onChange={handleInputChange("email")}
        disabled={loading}
      />
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Inserte su nombre"
        value={formState.name}
        onChange={handleInputChange("name")}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Cargando..." : update ? "Actualizar" : "Guardar"}
      </button>
      {update && (
        <button
          type="button"
          onClick={onCancelUpdate}
          style={{ marginTop: 8, background: "#bbb", color: "#222" }}
        >
          Cancelar
        </button>
      )}
    </form>
  );
};

export default AddEditForm;
