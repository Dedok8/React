function PaginationBlock({ totalPages, page, setPage }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const maxVisiblePages = 5; // Максимум 5 кнопок одночасно
  let visiblePages = pages; // За замовчуванням - всі сторінки

  if (totalPages > maxVisiblePages) {
    const halfVisible = Math.floor(maxVisiblePages / 2); // Це означає: показати 2 сторінки ДО і 2 ПІСЛЯ поточної // Крок 1: Визначити "половину"
    let start = Math.max(page - halfVisible, 1); // Крок 2: Визначити початок діапазону
    let end = Math.min(start + maxVisiblePages - 1, totalPages); // Крок 3: Визначити кінець діапазону

    if (end - start < maxVisiblePages - 1) {
      start = Math.max(end - maxVisiblePages + 1, 1);
    }
    // Крок 5: Вирізати потрібні сторінки
    visiblePages = pages.slice(start - 1, end);
  }

  return (
    <div className="flex justify-center items-center mt-8 gap-2 flex-wrap">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:hover:scale-100 disabled:hover:shadow-none shadow-md"
      >
        ← Назад
      </button>

      {visiblePages[0] > 1 && (
        <>
          <button
            onClick={() => setPage(1)}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
          >
            1
          </button>
          {visiblePages[0] > 2 && (
            <span className="px-2 text-gray-400 dark:text-gray-500 font-bold">
              •••
            </span>
          )}
        </>
      )}

      {visiblePages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`w-11 h-11 flex items-center justify-center rounded-xl font-semibold transition-all duration-300 hover:scale-110 shadow-sm ${
            p === page
              ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-blue-500/30 scale-110"
              : "bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md"
          }`}
        >
          {p}
        </button>
      ))}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="px-2 text-gray-400 dark:text-gray-500 font-bold">
              •••
            </span>
          )}
          <button
            onClick={() => setPage(totalPages)}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:hover:scale-100 disabled:hover:shadow-none shadow-md"
      >
        Вперед →
      </button>
    </div>
  );
}

export default PaginationBlock;
