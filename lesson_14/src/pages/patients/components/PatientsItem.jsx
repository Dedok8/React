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
    <li className="group relative border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gradient-to-br from-white to-violet-50/20 dark:from-gray-900 dark:to-violet-900/10 hover:shadow-xl hover:shadow-violet-100/20 dark:hover:shadow-violet-900/10 hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm overflow-hidden mb-4">
      {/* Декоративный градиентный акцент */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 via-fuchsia-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl"></div>

      <div className="flex items-center gap-4 flex-1">
        {/* Аватар */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0">
          {item.fullName.charAt(0)}
        </div>

        {/* Информация о пациенте */}
        <div className="flex flex-col space-y-1.5">
          <span className="text-lg font-bold text-gray-900 dark:text-gray-50 tracking-tight">
            {item.fullName}
          </span>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
              <span className="text-fuchsia-500">⚧</span>
              {item.gender === "male"
                ? "Чоловік"
                : item.gender === "female"
                  ? "Жінка"
                  : item.gender}
            </span>
            <span className="text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
              <span className="text-pink-500">📱</span>
              {item.phone}
            </span>
          </div>
        </div>
      </div>

      {/* Кнопки действий */}
      <div className="flex items-center gap-2 mt-4 sm:mt-0 sm:ml-4">
        <Link
          to={frontRoutes.navigate.patients.details(item.id)}
          className="px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105 text-sm"
        >
          👁️ Деталі
        </Link>
        <Link
          to={frontRoutes.navigate.patients.edit(item.id)}
          className="px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-pink-600 hover:from-fuchsia-600 hover:to-pink-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg hover:shadow-fuchsia-500/30 transition-all duration-300 hover:scale-105 text-sm"
        >
          ✏️ Редагувати
        </Link>
        <button
          onClick={onDelete}
          disabled={isLoading}
          className={`px-4 py-2 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 text-sm ${
            isLoading ? "opacity-50 cursor-not-allowed grayscale" : ""
          }`}
        >
          {isLoading ? "⏳ Видалення..." : "🗑️ Видалити"}
        </button>
      </div>
    </li>
  );
}

export default PatientsItem;
