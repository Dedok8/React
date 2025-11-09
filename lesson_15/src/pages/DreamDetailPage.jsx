import useDetailDream from "@/features/Detail-dream/model/useDetailDream";
import Spinner from "@/shared/ui/Spinner";
import { useNavigate, useParams } from "react-router";

function DreamDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { detailDream, isLoading, isError } = useDetailDream({ id });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center border-2 border-red-200">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Помилка завантаження
          </h2>
          <p className="text-gray-600 mb-6">
            Не вдалося завантажити деталі мрії
          </p>
          <button
            onClick={() => navigate(-1)}
            className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-green-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            ← Повернутися назад
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-emerald-800 mb-2">
            ✨ Деталі мрії
          </h1>
          <p className="text-gray-600">
            Перегляд повної інформації про вашу мрію
          </p>
        </div>

        {detailDream && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-200 shadow-lg hover:shadow-xl hover:border-emerald-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">✨</span>
                <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-wider pt-2">
                  ЗАГОЛОВОК
                </h3>
              </div>
              <p className="text-gray-800 text-3xl font-bold leading-tight">
                {detailDream.title}
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg hover:shadow-xl hover:border-green-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">📝</span>
                <h3 className="text-xs font-bold text-green-700 uppercase tracking-wider pt-2">
                  ОПИС
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                {detailDream.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 border-2 border-emerald-200 shadow-lg hover:shadow-xl hover:border-emerald-400 transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-4">
                  РІК
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">📅</span>
                  <p className="text-gray-800 font-bold text-3xl">
                    {detailDream.year}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl hover:border-green-400 transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xs font-bold text-green-700 uppercase tracking-wider mb-4">
                  КАТЕГОРІЯ
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">🏷️</span>
                  <p className="text-gray-800 font-bold text-2xl">
                    {detailDream.category}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-200 shadow-lg hover:shadow-xl hover:border-emerald-400 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-4">
                З КИМ
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-4xl">👥</span>
                <p className="text-gray-800 font-bold text-2xl">
                  {detailDream.withWhom}
                </p>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <button
                onClick={() => navigate(-1)}
                className="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold text-lg rounded-xl hover:from-emerald-700 hover:to-green-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                ← Повернутися до списку мрій
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DreamDetailPage;
