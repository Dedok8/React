import useAdd_Edit_Dream from "@/features/Add_edit-dream/model/useAdd_Edit_Dream";
import Spinner from "@/shared/ui/Spinner";
import selectDreamCategories from "@/shared/utils/selectDreamCategories";
import { useNavigate } from "react-router";

function Add_Edit_DreamBtn({ id, onSuccess }) {
  const navigate = useNavigate();
  const {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
    editMode,
    emptyInputs,
  } = useAdd_Edit_Dream({ id });

  const onSubmit = async (e) => {
    const success = await handleSubmit(e);
    if (success && onSuccess) onSuccess();
  };

  if (loading) return <Spinner />;

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-emerald-100"
    >
      <h2 className="text-2xl font-bold text-emerald-800 mb-6 pb-4 border-b-2 border-emerald-200">
        {editMode ? "✏️ Редагувати мрію" : "✨ Додати нову мрію"}
      </h2>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg animate-shake">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            <span className="text-red-700 font-medium">
              Сталася помилка під час збереження. Спробуйте ще раз.
            </span>
          </div>
        </div>
      )}

      <label className="block group">
        <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-2 block">
          Заголовок
        </span>
        <input
          type="text"
          name="title"
          placeholder="Заголовок мрії"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 group-hover:border-emerald-300"
        />
        {emptyInputs.includes("title") && (
          <small className="text-red-600 text-xs mt-1 block animate-pulse">
            ⚠️ Введіть заголовок
          </small>
        )}
      </label>

      <label className="block group">
        <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-2 block">
          Опис
        </span>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Розкажіть про свою мрію..."
          className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 min-h-32 resize-y group-hover:border-emerald-300"
        />
        {emptyInputs.includes("description") && (
          <small className="text-red-600 text-xs mt-1 block animate-pulse">
            ⚠️ Введіть опис
          </small>
        )}
      </label>

      <label className="block group">
        <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-2 block">
          Рік
        </span>
        <input
          type="number"
          name="year"
          placeholder="2025"
          value={formData.year}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 group-hover:border-emerald-300"
        />
        {emptyInputs.includes("year") && (
          <small className="text-red-600 text-xs mt-1 block animate-pulse">
            ⚠️ Вкажіть рік
          </small>
        )}
      </label>

      <label className="block group">
        <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-2 block">
          З ким
        </span>
        <input
          type="text"
          name="withWhom"
          placeholder="З ким ви будете"
          value={formData.withWhom}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 group-hover:border-emerald-300"
        />
        {emptyInputs.includes("withWhom") && (
          <small className="text-red-600 text-xs mt-1 block animate-pulse">
            ⚠️ Вкажіть з ким
          </small>
        )}
      </label>

      <label className="block group">
        <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-2 block">
          Категорія
        </span>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 bg-white cursor-pointer group-hover:border-emerald-300"
        >
          <option value="">Виберіть категорію</option>
          {selectDreamCategories.map((dreamCat) => (
            <option key={dreamCat.id} value={dreamCat.label}>
              {dreamCat.label}
            </option>
          ))}
        </select>
        {emptyInputs.includes("category") && (
          <small className="text-red-600 text-xs mt-1 block animate-pulse">
            ⚠️ Виберіть категорію
          </small>
        )}
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-emerald-700 hover:to-green-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {editMode ? "💾 Зберегти зміни" : "✨ Додати мрію"}
      </button>
      {editMode && (
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-full bg-emerald-100 text-emerald-700 font-semibold py-4 px-6 rounded-lg hover:bg-emerald-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
          ← Назад
        </button>
      )}
    </form>
  );
}

export default Add_Edit_DreamBtn;
