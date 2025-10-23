import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import {
  fetchPosts,
  fetchMorePosts,
  fetchDeletePost,
} from "@/store/postsThunks";
import PostsList from "./components/PostsList";

function InfinitePostsPage() {
  const {
    postsList,
    currentPageNumber,
    postsNumberPerPage,
    totalPagesNumber,
    status,
    error,
  } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts({ pageNumber: 1, itemsPerPage: postsNumberPerPage }));
  }, [dispatch, postsNumberPerPage]);

  const handleDeletePost = useCallback(
    (id) => {
      dispatch(fetchDeletePost({ id }));
    },
    [dispatch]
  );

  const handleScroll = useCallback(() => {
    const bottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

    if (
      bottom &&
      status !== "loading" &&
      currentPageNumber < totalPagesNumber
    ) {
      dispatch(
        fetchMorePosts({
          pageNumber: currentPageNumber + 1,
          itemsPerPage: postsNumberPerPage,
        })
      );
    }
  }, [
    dispatch,
    currentPageNumber,
    totalPagesNumber,
    postsNumberPerPage,
    status,
  ]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const hasMorePosts = currentPageNumber < totalPagesNumber;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-100 dark:from-gray-900 dark:via-purple-950 dark:to-indigo-950 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="relative mb-10 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-violet-200/50 dark:border-violet-800/50 hover:shadow-2xl hover:border-violet-400 dark:hover:border-violet-600 transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-4xl group-hover:animate-bounce">∞</span>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                Infinite Posts
              </h1>
            </div>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
              Прокручуйте для завантаження більше постів
            </p>

            <div className="mt-4 pt-4 border-t border-violet-200 dark:border-violet-800">
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span className="group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  Завантажено:{" "}
                  <span className="font-bold text-violet-600 dark:text-violet-400">
                    {postsList.length}
                  </span>{" "}
                  постів
                </span>
                <span className="group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                  Сторінка:{" "}
                  <span className="font-bold text-fuchsia-600 dark:text-fuchsia-400">
                    {currentPageNumber}
                  </span>{" "}
                  / {totalPagesNumber}
                </span>
              </div>

              <div className="mt-2 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-full transition-all duration-700 ease-out group-hover:shadow-lg group-hover:shadow-purple-500/50"
                  style={{
                    width: `${(currentPageNumber / totalPagesNumber) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group/list">
          <div className="absolute -inset-8 bg-gradient-to-r from-violet-500/0 via-purple-500/0 to-fuchsia-500/0 group-hover/list:from-violet-500/10 group-hover/list:via-purple-500/10 group-hover/list:to-fuchsia-500/10 blur-3xl transition-all duration-1000 rounded-3xl pointer-events-none"></div>

          <div className="relative">
            <PostsList postsList={postsList} onDeletePost={handleDeletePost} />
          </div>
        </div>

        {status === "loading" && (
          <div className="mt-8 group/loading">
            <div className="flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border-2 border-dashed border-violet-300 dark:border-violet-700 group-hover/loading:border-solid group-hover/loading:shadow-xl group-hover/loading:scale-105 transition-all duration-500">
              {/* Animated spinner */}
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-violet-200 dark:border-violet-800 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-transparent border-t-violet-600 dark:border-t-violet-400 rounded-full animate-spin"></div>
                <div
                  className="absolute inset-2 border-4 border-transparent border-t-purple-500 rounded-full animate-spin animation-delay-150"
                  style={{ animationDirection: "reverse" }}
                ></div>
                <div className="absolute inset-4 border-4 border-transparent border-t-fuchsia-500 rounded-full animate-spin animation-delay-300"></div>
              </div>

              <div className="text-center">
                <div className="text-lg font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent group-hover/loading:scale-110 transition-transform duration-300">
                  Завантаження...
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 group-hover/loading:text-gray-700 dark:group-hover/loading:text-gray-300 transition-colors">
                  Отримання нових постів
                </div>
              </div>
            </div>
          </div>
        )}

        {status === "failed" && (
          <div className="mt-8 group/error">
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-2xl border-2 border-red-300 dark:border-red-700 group-hover/error:shadow-2xl group-hover/error:border-red-500 dark:group-hover/error:border-red-500 group-hover/error:scale-[1.02] transition-all duration-300">
              <span className="text-3xl group-hover/error:animate-bounce group-hover/error:scale-125 transition-transform">
                ⚠️
              </span>
              <div className="flex-1">
                <div className="font-bold text-red-700 dark:text-red-400 text-lg mb-2 group-hover/error:text-red-600 dark:group-hover/error:text-red-300 transition-colors">
                  Виникла помилка
                </div>
                <div className="text-sm text-red-600 dark:text-red-500 bg-white/50 dark:bg-black/20 p-3 rounded-lg border border-red-200 dark:border-red-800 group-hover/error:bg-white/80 dark:group-hover/error:bg-black/40 transition-colors">
                  {error?.message || JSON.stringify(error)}
                </div>
              </div>
            </div>
          </div>
        )}

        {!hasMorePosts && postsList.length > 0 && status !== "loading" && (
          <div className="mt-8 mb-12 group/end">
            <div className="relative overflow-hidden p-8 bg-gradient-to-r from-violet-100 via-purple-100 to-fuchsia-100 dark:from-violet-900/30 dark:via-purple-900/30 dark:to-fuchsia-900/30 rounded-2xl border-2 border-violet-300 dark:border-violet-700 group-hover/end:shadow-2xl group-hover/end:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-purple-500/20 to-fuchsia-500/0 group-hover/end:via-purple-500/30 transition-all duration-700"></div>

              <div className="relative text-center">
                <div className="text-4xl mb-3 group-hover/end:scale-125 transition-transform duration-500">
                  ✨
                </div>
                <div className="text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent mb-2 group-hover/end:scale-110 transition-transform duration-300">
                  Ви переглянули всі пости!
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 group-hover/end:text-gray-800 dark:group-hover/end:text-gray-200 transition-colors">
                  Завантажено {postsList.length} постів
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfinitePostsPage;
