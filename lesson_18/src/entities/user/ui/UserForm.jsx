import { roles } from "@/shared/config/roles";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function UserForm({ user = {}, onSubmit, isSubmiting, isSubmitingError }) {
  const [email, setEmail] = useState(user?.email || "");
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [role, setRole] = useState(user?.role || "user");
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, displayName, role });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        disabled={!!user.id}
        required
      />
      <input
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder={t("inputs.name")}
        disabled={!!user.id}
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        {Object.entries(roles).map(([key, value]) => (
          <option key={key} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button type="submit" disabled={isSubmiting}>
        {user.id ? t("buttons.save") : t("buttons.add")}
      </button>
      {isSubmitingError && (
        <div style={{ color: "red" }}>
          {isSubmitingError?.data?.message || t("common.errorMessage")}
        </div>
      )}
    </form>
  );
}

export default UserForm;
