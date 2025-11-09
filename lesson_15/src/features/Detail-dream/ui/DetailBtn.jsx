import { frontRoutes } from "@/shared/config/frontRoutes";
import { useNavigate } from "react-router";

function DetailBtn({ id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(frontRoutes.navigate.dreamDetail(id));
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-emerald-50 text-emerald-700 border-2 border-emerald-200 rounded-lg hover:bg-emerald-100 hover:border-emerald-400 hover:shadow-md transition-all duration-200 font-medium"
    >
      📋 Детальніше
    </button>
  );
}

export default DetailBtn;
