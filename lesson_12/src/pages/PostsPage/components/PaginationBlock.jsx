function PaginationBlock({
  currentPageNumber,
  totalPagesNumber,
  onPageChange,
}) {
  if (totalPagesNumber <= 1) return null;

  return (
    <div className="flex justify-center mt-6">
      <div className="flex items-center gap-1 overflow-x-auto max-w-full px-2 py-1">
        <button
          disabled={currentPageNumber === 1}
          onClick={() => onPageChange(currentPageNumber - 1)}
          className={`flex-shrink-0 px-3 py-1 rounded-md text-sm font-medium transition-colors duration-300
            ${
              currentPageNumber === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:text-blue-600"
            }`}
        >
          ⬅
        </button>

        {/* Pages */}
        {Array.from({ length: totalPagesNumber }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`flex-shrink-0 px-3 py-1 rounded-md text-sm font-medium border transition-colors duration-300
              ${
                index + 1 === currentPageNumber
                  ? "bg-blue-500 text-white border-blue-500 shadow-sm"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-blue-600"
              }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPageNumber === totalPagesNumber}
          onClick={() => onPageChange(currentPageNumber + 1)}
          className={`flex-shrink-0 px-3 py-1 rounded-md text-sm font-medium transition-colors duration-300
            ${
              currentPageNumber === totalPagesNumber
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:text-blue-600"
            }`}
        >
          ➡
        </button>
      </div>
    </div>
  );
}

export default PaginationBlock;
