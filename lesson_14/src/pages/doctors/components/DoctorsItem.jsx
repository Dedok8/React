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
    <li className="group relative border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between bg-gradient-to-br from-white to-emerald-50/20 dark:from-gray-900 dark:to-emerald-900/10 hover:shadow-xl hover:shadow-emerald-100/20 dark:hover:shadow-emerald-900/10 hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm overflow-hidden">
      {/* Декоративный градиентный акцент */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl"></div>

      <div className="flex flex-col space-y-3 flex-1">
        {/* Имя врача */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
            {item.fullName.charAt(0)}
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-gray-50 tracking-tight">
            {item.fullName}
          </span>
        </div>

        {/* Информация о враче */}
        <div className="flex flex-col gap-2 ml-12">
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
            <span>🩺</span>
            {item.specialization}
          </span>

          {item.email && (
            <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
              <span className="text-cyan-500">📧</span>
              <a
                href={`mailto:${item.email}`}
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {item.email}
              </a>
            </span>
          )}

          <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <span className="text-teal-500">📱</span>
            <a
              href={`tel:${item.phone}`}
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              {item.phone}
            </a>
          </span>

          {item.room && (
            <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
              <span className="text-amber-500">🚪</span>
              Кабінет: {item.room}
            </span>
          )}

          {item.notes && (
            <span className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2 mt-1">
              <span className="text-purple-500 mt-0.5">📝</span>
              <span className="line-clamp-2">{item.notes}</span>
            </span>
          )}
        </div>
      </div>

      {/* Кнопки действий */}
      <div className="flex items-center gap-2 mt-4 sm:mt-0 sm:ml-4">
        <Link
          to={frontRoutes.navigate.doctors.edit(item.id)}
          className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
        >
          ✏️ Редагувати
        </Link>

        <button
          onClick={onDelete}
          disabled={isLoading}
          className={`px-4 py-2 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 ${
            isLoading ? "opacity-50 cursor-not-allowed grayscale" : ""
          }`}
        >
          {isLoading ? "⏳" : "🗑️ Видалити"}
        </button>
      </div>
    </li>
  );
}

export default DoctorsItem;
