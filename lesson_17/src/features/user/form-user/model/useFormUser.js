import { useState } from "react";

function useFormUser({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const onClear = () => {
    setName("");
    setEmail("");
    setPassword("");
    setRole("user");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onSubmit) {
      try {
        await onSubmit({ name, email, password, role });
        onClear();
      } catch (error) {
        console.error(error);
      }
    }
  };
  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    role,
    setRole,
    handleSubmit,
  };
}

export default useFormUser;
