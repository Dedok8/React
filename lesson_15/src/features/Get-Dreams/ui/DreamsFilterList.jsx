import selectDreamCategories from "@/shared/utils/selectDreamCategories";

function DreamsFilterList({
  selectCategory,
  setSelectCategory,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      <select
        value={selectCategory}
        onChange={(e) => setSelectCategory(e.target.value)}
        className="flex-1 min-w-48 px-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 bg-white cursor-pointer hover:border-emerald-300"
      >
        <option value="">Виберіть категорію</option>
        {selectDreamCategories.map((category) => (
          <option key={category.id} value={category.label}>
            {category.label}
          </option>
        ))}
      </select>
      <div className="flex-1 min-w-48">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 bg-white cursor-pointer hover:border-emerald-300"
        >
          <option value="">Оберіть порядок</option>
          <option value="asc">За зростанням</option>
          <option value="desc">За спаданням</option>
        </select>
      </div>
    </div>
  );
}

export default DreamsFilterList;
