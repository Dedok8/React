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
    <div className="flex justify-center items-center mt-6 gap-2">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        Назад
      </button>

      {visiblePages[0] > 1 && (
        <>
          <button
            onClick={() => setPage(1)}
            className="w-10 h-10 flex items-center justify-center rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            1
          </button>
          {visiblePages[0] > 2 && <span className="px-2">...</span>}
        </>
      )}

      {visiblePages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`w-10 h-10 flex items-center justify-center rounded transition-colors ${
            p === page
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {p}
        </button>
      ))}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="px-2">...</span>
          )}
          <button
            onClick={() => setPage(totalPages)}
            className="w-10 h-10 flex items-center justify-center rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        Вперед
      </button>
    </div>
  );
}

export default PaginationBlock;
