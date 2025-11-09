import DreamCard from "@/entities/dream/ui/DreamCard";
import DeleteDreamBtn from "@/features/Delete-dream/ui/DeleteDreamBtn";
import DetailBtn from "@/features/Detail-dream/ui/DetailBtn";
import useGetDreams from "@/features/Get-Dreams/model/useGetDreams";
import PaginationBlock from "@/shared/ui/PaginationBlock/PaginationBlock";
import Spinner from "@/shared/ui/Spinner";
import { useNavigate } from "react-router";
import { frontRoutes } from "@/shared/config/frontRoutes";
import useGetDreamsFilter from "@/features/Get-Dreams/model/useGetDreamsFilter";
import DreamsFilterList from "@/features/Get-Dreams/ui/DreamsFilterList";

function DreamsList() {
  const navigate = useNavigate();
  const {
    filters,
    selectCategory,
    setSelectCategory,
    sortOrder,
    setSortOrder,
  } = useGetDreamsFilter();
  const {
    dreams,
    hasMore,
    currentPage,
    isLoading,
    isFetching,
    handlePageChange,
  } = useGetDreams({
    perPage: 5,
    filters,
    sortOrder,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-emerald-800 mb-2">
            ✨ Мої мрії
          </h1>
          <p className="text-gray-600">Управління вашими мріями та цілями</p>
        </div>

        <DreamsFilterList
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        {dreams.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center border-2 border-emerald-200">
            <div className="text-6xl mb-4">💭</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Мрій ще немає
            </h3>
            <p className="text-gray-600">Почніть додавати свої мрії та цілі!</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {dreams.map((dream) => (
              <DreamCard
                key={dream.id}
                dream={dream}
                action={
                  <div className="flex gap-2 flex-wrap">
                    <DeleteDreamBtn id={dream.id} />
                    <button
                      onClick={() =>
                        navigate(frontRoutes.navigate.dreamEdit(dream.id))
                      }
                      className="px-4 py-2 bg-emerald-50 text-emerald-700 border-2 border-emerald-200 rounded-lg hover:bg-emerald-100 hover:border-emerald-400 hover:shadow-md transition-all duration-200 font-medium"
                    >
                      ✏️ Редагувати
                    </button>
                    <DetailBtn id={dream.id} />
                  </div>
                }
              />
            ))}
          </ul>
        )}

        {isFetching && (
          <div className="flex justify-center py-8">
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-3 border-2 border-emerald-200">
              <Spinner />
              <span className="text-emerald-700 font-medium">
                Завантаження...
              </span>
            </div>
          </div>
        )}

        {dreams.length > 0 && (
          <PaginationBlock
            currentPage={currentPage}
            onPageChange={handlePageChange}
            hasMore={hasMore}
          />
        )}
      </div>
    </div>
  );
}

export default DreamsList;
