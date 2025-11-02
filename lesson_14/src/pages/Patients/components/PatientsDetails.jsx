import { useGetPatientsByIdQuery } from "@/api";
import { useNavigate, useParams } from "react-router";

function PatientsDetails() {
  const { id } = useParams();
  const {
    data: item,
    isLoading,
    isError,
  } = useGetPatientsByIdQuery(id, {
    skip: !id,
  });
  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className="text-center py-8 text-gray-500 font-medium">
        Завантаження деталей...
      </div>
    );

  if (isError)
    return (
      <div className="text-center py-8 text-red-600 font-medium">
        Помилка завантаження деталей.
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto my-8 bg-gradient-to-br from-white via-violet-50/20 to-fuchsia-50/20 dark:from-gray-900 dark:via-violet-950/20 dark:to-fuchsia-950/20 p-10 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-colors backdrop-blur-sm relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-violet-400/10 to-fuchsia-400/10 rounded-full blur-3xl -z-10"></div>

      {/* Заголовок */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-pink-400 flex items-center gap-3">
          🏥 Деталі пацієнта
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 rounded-full mt-2"></div>
      </div>

      {/* Карточка с информацией */}
      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <div className="flex items-start gap-6 mb-6">
          {/* Аватар */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 flex items-center justify-center text-white font-bold text-3xl shadow-lg flex-shrink-0">
            {item.fullName.charAt(0)}
          </div>

          {/* Основная информация */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-1">
              {item.fullName}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <span>📋</span>
              Картка пацієнта
            </p>
          </div>
        </div>

        {/* Детальная информация */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-violet-50/50 to-fuchsia-50/50 dark:from-violet-900/10 dark:to-fuchsia-900/10 rounded-xl border border-violet-100/50 dark:border-violet-800/30">
            <span className="text-2xl">🎂</span>
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                Дата народження
              </p>
              <p className="text-base font-medium text-gray-900 dark:text-gray-100">
                {item.birthDate}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-fuchsia-50/50 to-pink-50/50 dark:from-fuchsia-900/10 dark:to-pink-900/10 rounded-xl border border-fuchsia-100/50 dark:border-fuchsia-800/30">
            <span className="text-2xl">⚧</span>
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                Стать
              </p>
              <p className="text-base font-medium text-gray-900 dark:text-gray-100">
                {item.gender === "male"
                  ? "👨 Чоловіча"
                  : item.gender === "female"
                    ? "👩 Жіноча"
                    : item.gender}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-pink-50/50 to-violet-50/50 dark:from-pink-900/10 dark:to-violet-900/10 rounded-xl border border-pink-100/50 dark:border-pink-800/30">
            <span className="text-2xl">📱</span>
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                Телефон
              </p>
              <a
                href={`tel:${item.phone}`}
                className="text-base font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
              >
                {item.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-violet-50/50 to-fuchsia-50/50 dark:from-violet-900/10 dark:to-fuchsia-900/10 rounded-xl border border-violet-100/50 dark:border-violet-800/30">
            <span className="text-2xl">📧</span>
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                Email
              </p>
              <a
                href={`mailto:${item.email}`}
                className="text-base font-medium text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 transition-colors break-all"
              >
                {item.email || "—"}
              </a>
            </div>
          </div>

          <div className="md:col-span-2 flex items-start gap-3 p-4 bg-gradient-to-br from-fuchsia-50/50 to-pink-50/50 dark:from-fuchsia-900/10 dark:to-pink-900/10 rounded-xl border border-fuchsia-100/50 dark:border-fuchsia-800/30">
            <span className="text-2xl">📍</span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                Адреса
              </p>
              <p className="text-base font-medium text-gray-900 dark:text-gray-100">
                {item.address || "—"}
              </p>
            </div>
          </div>

          <div className="md:col-span-2 flex items-start gap-3 p-4 bg-gradient-to-br from-pink-50/50 to-violet-50/50 dark:from-pink-900/10 dark:to-violet-900/10 rounded-xl border border-pink-100/50 dark:border-pink-800/30">
            <span className="text-2xl">📝</span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                Примітки
              </p>
              <p className="text-base font-medium text-gray-900 dark:text-gray-100">
                {item.notes || "Приміток нема"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Кнопка возврата */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => navigate(-1)}
          className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 hover:from-violet-700 hover:via-fuchsia-700 hover:to-pink-700 text-white font-bold shadow-lg hover:shadow-xl hover:shadow-fuchsia-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 flex items-center gap-2"
        >
          ← Повернутись
        </button>
      </div>
    </div>
  );
}

export default PatientsDetails;
