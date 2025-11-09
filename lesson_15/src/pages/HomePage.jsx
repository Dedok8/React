import { useNavigate } from "react-router";
import { frontRoutes } from "@/shared/config/frontRoutes";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 animate-bounce">
            <span className="text-8xl">✨</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-6 leading-tight">
            Ласкаво просимо
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            до вашого особистого простору мрій та цілей
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Тут ви можете записувати свої мрії, відстежувати їх та робити кроки
            до їх здійснення
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <button
            onClick={() => navigate(frontRoutes.navigate.addDream)}
            className="group bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-200 shadow-lg hover:shadow-2xl hover:border-emerald-400 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
              ➕
            </div>
            <h3 className="text-2xl font-bold text-emerald-800 mb-2">
              Додати нову мрію
            </h3>
            <p className="text-gray-600">
              Почніть записувати свої мрії та плани на майбутнє
            </p>
          </button>

          <button
            onClick={() => navigate(frontRoutes.navigate.dreamList)}
            className="group bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg hover:shadow-2xl hover:border-green-400 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
              📋
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">Мої мрії</h3>
            <p className="text-gray-600">
              Переглядайте та керуйте вашими існуючими мріями
            </p>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border-2 border-emerald-200 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-3">💭</div>
            <h4 className="text-lg font-bold text-emerald-800 mb-2">
              Записуйте мрії
            </h4>
            <p className="text-gray-600 text-sm">
              Зберігайте всі свої ідеї та бажання в одному місці
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-green-200 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-3">🎯</div>
            <h4 className="text-lg font-bold text-green-800 mb-2">
              Встановлюйте цілі
            </h4>
            <p className="text-gray-600 text-sm">
              Плануйте коли та з ким ви хочете здійснити свої мрії
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-emerald-200 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-3">🌟</div>
            <h4 className="text-lg font-bold text-emerald-800 mb-2">
              Здійснюйте мрії
            </h4>
            <p className="text-gray-600 text-sm">
              Крок за кроком наближайтесь до реалізації ваших бажань
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 shadow-xl">
            <p className="text-2xl md:text-3xl font-bold text-white mb-3 italic">
              "Мрія — це не те, що ви бачите уві сні,
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white italic">
              це те, що не дає вам спати"
            </p>
            <p className="text-emerald-100 mt-4 text-lg">
              — А. П. Дж. Абдул Калам
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
