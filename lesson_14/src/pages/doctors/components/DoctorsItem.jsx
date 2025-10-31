import { useDeleteDoctorMutation } from "@/api";
import frontRoutes from "@/router/frontRoutes";
import { Link } from "react-router";

function DoctorsItem({ item }) {
  const [deleteDoctor, { isLoading, isError }] = useDeleteDoctorMutation();

  const onDelete = async () => {
    if (!confirm(`Видалити доктора ${item.fullName}?`)) return;

    try {
      await deleteDoctor(item.id).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  if (isError)
    return (
      <div className="text-red-600 text-center py-4 font-medium">
        Сталася помилка при видаленні
      </div>
    );

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white shadow-md rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col space-y-1">
        <p className="font-semibold text-lg text-gray-800">{item.fullName}</p>
        <p className="text-gray-500">{item.specialty}</p>
        <p className="text-gray-500">{item.phone}</p>
      </div>

      <div className="flex space-x-3 mt-3 sm:mt-0">
        <Link
          to={frontRoutes.navigate.doctors.details(item.id)}
          className="px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          Деталі
        </Link>

        <Link
          to={frontRoutes.navigate.doctors.edit(item.id)}
          className="px-3 py-1.5 text-sm font-medium text-amber-600 hover:text-amber-800 transition-colors"
        >
          Редагувати
        </Link>

        <button
          onClick={onDelete}
          disabled={isLoading}
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
            isLoading
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
        >
          {isLoading ? "Видалення..." : "Видалити"}
        </button>
      </div>
    </li>
  );
}

export default DoctorsItem;
