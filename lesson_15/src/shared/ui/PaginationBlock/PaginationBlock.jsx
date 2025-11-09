function PaginationBlock({ currentPage, onPageChange, hasMore }) {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-6 py-3 bg-emerald-50 text-emerald-700 border-2 border-emerald-200 rounded-lg hover:bg-emerald-100 hover:border-emerald-400 hover:shadow-md hover:-translate-x-1 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:bg-emerald-50 font-medium"
      >
        <span>← Назад</span>
      </button>

      <strong className="text-2xl font-bold text-emerald-700 bg-gradient-to-br from-emerald-100 to-green-100 px-5 py-2 rounded-lg border-2 border-emerald-200 shadow-sm min-w-16 text-center">
        {String(currentPage).padStart(2, "0")}
      </strong>

      <button
        type="button"
        disabled={!hasMore}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-6 py-3 bg-emerald-50 text-emerald-700 border-2 border-emerald-200 rounded-lg hover:bg-emerald-100 hover:border-emerald-400 hover:shadow-md hover:translate-x-1 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:bg-emerald-50 font-medium"
      >
        <span>Вперед →</span>
      </button>
    </div>
  );
}

export default PaginationBlock;
