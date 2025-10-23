import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchCreatePost,
  fetchDeletePost,
  fetchPosts,
} from "@/store/postsThunks";
import { setCurrentPage } from "@/store/postsSlice";
import PostsList from "./components/PostsList";
import PaginationBlock from "./components/PaginationBlock";
import PostForm from "./components/postForm";

function PostsPage() {
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
    dispatch(
      fetchPosts({
        pageNumber: currentPageNumber,
        itemsPerPage: postsNumberPerPage,
      })
    );
  }, [dispatch, currentPageNumber, postsNumberPerPage]);

  const handleDeletePost = (id) => {
    dispatch(fetchDeletePost({ id }));
  };

  const onCreatePost = (post) => {
    dispatch(fetchCreatePost({ item: post }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl hover:shadow-2xl rounded-2xl p-8 transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-700 hover:scale-[1.01]">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-pink-400/0 hover:from-blue-400/5 hover:via-purple-400/5 hover:to-pink-400/5 rounded-2xl transition-all duration-700 pointer-events-none"></div>

          <h1 className="relative text-4xl font-bold text-center bg-gradient-to-r from-gray-800 via-blue-600 to-indigo-700 dark:from-white dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent mb-10 tracking-tight hover:scale-105 transition-transform duration-300 cursor-default">
            Posts Manager
          </h1>
        </div>

        <div className="mb-10 pb-8 border-b-2 border-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700 relative group">
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
          <PostForm onCreatePost={onCreatePost} />
        </div>

        <div className="space-y-4 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 hover:from-blue-500/5 hover:via-purple-500/5 hover:to-pink-500/5 blur-2xl transition-all duration-1000 pointer-events-none rounded-3xl"></div>

          <div className="relative">
            <PostsList postsList={postsList} onDeletePost={handleDeletePost} />
          </div>
        </div>

        {status === "loading" && (
          <div className="text-center mt-8 group">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full border border-blue-200 dark:border-blue-800 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
              <div className="w-5 h-5 border-3 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Завантаження...
              </span>
            </div>
          </div>
        )}

        {status === "failed" && (
          <div className="text-center mt-8 group">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-xl border-2 border-red-200 dark:border-red-800 group-hover:shadow-xl group-hover:scale-105 group-hover:border-red-400 dark:group-hover:border-red-600 transition-all duration-300">
              <span className="text-2xl group-hover:animate-bounce">⚠️</span>
              <div className="text-left">
                <div className="font-bold text-red-700 dark:text-red-400 group-hover:text-red-600 dark:group-hover:text-red-300 transition-colors">
                  Помилка
                </div>
                <div className="text-sm text-red-600 dark:text-red-500 mt-1">
                  {error?.message || JSON.stringify(error)}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 pt-8 border-t-2 border-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700 relative group">
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-indigo-400 via-blue-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>

          <PaginationBlock
            currentPageNumber={currentPageNumber}
            totalPagesNumber={totalPagesNumber}
            onPageChange={(page) => dispatch(setCurrentPage(page))}
          />
        </div>
      </div>
    </div>
  );
}

export default PostsPage;
