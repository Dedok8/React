import { Link } from "react-router";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-pink-400/20 to-fuchsia-400/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Основной контент */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Героическая секция */}
        <div className="text-center mb-16 pt-8">
          {/* Анимированная иконка */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="relative w-28 h-28 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                <span className="text-6xl">🏥</span>
              </div>
            </div>
          </div>

          {/* Заголовок */}
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-4 leading-tight">
            Медична клініка
          </h1>

          <div className="h-2 w-40 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-6"></div>

          {/* Подзаголовок */}
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
            Сучасна система управління
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Професійний облік пацієнтів, лікарів та медичних прийомів. Все що
            потрібно для ефективної роботи клініки в одному місці.
          </p>
        </div>

        {/* Статистика и функции */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Пацієнти */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                👥
              </div>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 mb-3">
                Пацієнти
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Повна база даних пацієнтів з детальною інформацією, історією
                візитів та медичними картками.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-violet-500">✓</span>
                  Особисті дані та контакти
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-fuchsia-500">✓</span>
                  Медична історія
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-500">✓</span>
                  Швидкий пошук
                </li>
              </ul>
            </div>
          </div>

          {/* Лікарі */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                👨‍⚕️
              </div>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 mb-3">
                Лікарі
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Управління персоналом з інформацією про спеціалізацію, графік
                роботи та кабінети.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Спеціалізації лікарів
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-500">✓</span>
                  Графік прийомів
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-500">✓</span>
                  Кабінети та контакти
                </li>
              </ul>
            </div>
          </div>

          {/* Прийоми */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                📋
              </div>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-3">
                Прийоми
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Зручне планування та керування медичними прийомами з
                відстеженням статусів.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  Календар прийомів
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span>
                  Статуси візитів
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-500">✓</span>
                  Причини звернень
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Преимущества */}
        <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-12 mb-16 shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-12">
            Чому обирають нас
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                Швидкість
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Миттєвий доступ до всіх даних
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                🔒
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                Безпека
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Захист конфіденційних даних
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                📱
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                Зручність
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Інтуїтивно зрозумілий інтерфейс
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                📊
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                Аналітика
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Звіти та статистика роботи
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 rounded-3xl shadow-2xl inline-block">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-6">
                Готові почати?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Оберіть розділ для роботи або створіть перший запис
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/patients"
                  className="px-10 py-5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 hover:from-violet-700 hover:via-fuchsia-700 hover:to-pink-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-fuchsia-500/40 transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-3 text-lg"
                >
                  <span className="text-2xl">👥</span>
                  Пацієнти
                </Link>

                <Link
                  to="/admin/doctors"
                  className="px-10 py-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-3 text-lg"
                >
                  <span className="text-2xl">👨‍⚕️</span>
                  Лікарі
                </Link>

                <Link
                  to="/appointments"
                  className="px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-3 text-lg"
                >
                  <span className="text-2xl">📋</span>
                  Прийоми
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Футер */}
        <div className="mt-20 pt-12 border-t border-gray-300 dark:border-gray-700">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🏥</span>
              </div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                Медична клініка
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              Професійна система управління для сучасних клінік
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              © 2025 Медична клініка. Всі права захищені.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
