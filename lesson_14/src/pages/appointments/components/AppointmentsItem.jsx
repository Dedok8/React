import { useDeleteAppointmentsMutation } from "@/api";
import { Link } from "react-router";
import frontRoutes from "@/router/frontRoutes";

function AppointmentsItem({ item, patientName, doctorName }) {
  const [deleteAppointments, { isLoading, isError }] =
    useDeleteAppointmentsMutation();

  const onDelete = async () => {
    if (!confirm(`Видалити прийом у пацієнта ${patientName || "—"}?`)) return;
    try {
      await deleteAppointments(item.id).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const date = new Date(dateStr);
    return date.toLocaleString("uk-UA", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  if (isError)
    return (
      <div className="text-red-600 text-center py-4 font-medium">
        Сталася помилка при видаленні
      </div>
    );

  return (
    <li className="group relative border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gradient-to-br from-white to-gray-50/30 dark:from-gray-900 dark:to-gray-800/30 hover:shadow-xl hover:shadow-blue-100/20 dark:hover:shadow-blue-900/10 hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm overflow-hidden">
      {/* Декоративный градиентный акцент */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl"></div>

      <div className="flex flex-col space-y-2.5">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse"></div>
          <span className="text-lg font-bold text-gray-900 dark:text-gray-50 tracking-tight">
            {patientName}
          </span>
        </div>

        <div className="flex flex-col gap-1.5 ml-3.5">
          <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <span className="text-blue-500 dark:text-blue-400">👨‍⚕️</span>
            {doctorName || "—"}
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <span className="text-purple-500 dark:text-purple-400">📅</span>
            {formatDate(item.date)}
          </span>
          {item.reason && (
            <span className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2 mt-0.5">
              <span className="text-amber-500 dark:text-amber-400 mt-0.5">
                💬
              </span>
              <span className="line-clamp-2">{item.reason}</span>
            </span>
          )}
        </div>

        <span
          className={`text-xs font-semibold px-3 py-1.5 rounded-full w-fit mt-2 backdrop-blur-sm shadow-sm transition-all duration-300 ${
            item.status === "completed"
              ? "bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 dark:from-emerald-900/40 dark:to-green-900/40 dark:text-emerald-300 ring-1 ring-emerald-500/20"
              : item.status === "cancelled"
                ? "bg-gradient-to-r from-rose-100 to-red-100 text-rose-700 dark:from-rose-900/40 dark:to-red-900/40 dark:text-rose-300 ring-1 ring-rose-500/20"
                : item.status === "no-show"
                  ? "bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 dark:from-orange-900/40 dark:to-amber-900/40 dark:text-orange-300 ring-1 ring-orange-500/20"
                  : "bg-gradient-to-r from-sky-100 to-blue-100 text-sky-700 dark:from-sky-900/40 dark:to-blue-900/40 dark:text-sky-300 ring-1 ring-sky-500/20"
          }`}
        >
          {item.status || "—"}
        </span>
      </div>

      <div className="flex items-center gap-2 mt-4 sm:mt-0">
        <Link
          to={frontRoutes.navigate.appointments.edit(item.id)}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
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

export default AppointmentsItem;
