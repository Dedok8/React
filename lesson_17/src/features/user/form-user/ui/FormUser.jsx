import useFormUser from "@/features/user/form-user/model/useFormUser";
import { rolesArr } from "@/shared/config/roles";

function FormUser({ onSubmit, isLoading }) {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    role,
    setRole,
    handleSubmit,
  } = useFormUser({ onSubmit });

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2.5">
        <label>
          Name
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="name"
            className="ml-2.5"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email"
            className="ml-2.5"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            placeholder="password"
            className="ml-2.5"
          />
        </label>
        <label>
          Role
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            name="role"
            required
          >
            {rolesArr.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Збереження..." : "Додати користувача"}
      </button>
    </form>
  );
}

export default FormUser;
