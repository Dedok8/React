import { useDeletePatientsMutation } from "@/api";
import frontRoutes from "@/router/frontRoutes";
import { Link } from "react-router";

function PatientsItem({ item }) {
  const [deletePatient, { isLoading, error }] = useDeletePatientsMutation();

  const onDelete = async () => {
    if (!confirm(`Видалити пацієнта ${item.fullName}?`)) return;
    try {
      await deletePatient(item.id).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  if (error)
    return (
      <div className="text-red-600 text-center py-4 font-medium">
        Сталася помилка при видаленні
      </div>
    );

  return (
    <li className="bg-white shadow-md rounded-2xl p-5 flex justify-between items-center mb-4 hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col space-y-1">
        <p className="font-semibold text-lg text-gray-800">{item.fullName}</p>
        <p className="text-gray-500">{item.gender}</p>
        <p className="text-gray-500">{item.phone}</p>
      </div>

      <div className="flex items-center space-x-3">
        <Link
          to={frontRoutes.navigate.patients.details(item.id)}
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Деталі
        </Link>
        <Link
          to={frontRoutes.navigate.patients.edit(item.id)}
          className="text-yellow-600 hover:text-yellow-800 font-medium transition-colors"
        >
          Редагувати
        </Link>
        <button
          onClick={onDelete}
          disabled={isLoading}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Видалення..." : "Видалити"}
        </button>
      </div>
    </li>
  );
}

export default PatientsItem;
