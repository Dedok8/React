import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";
import { postThunk } from "@/redux/slice/postThunk";

function PostList() {
  const { postList, loading, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postThunk());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Spinner />
        <p className="mt-4 text-lg text-gray-700">Завантаження постів...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
        <p className="text-red-600 text-lg font-semibold">Помилка: {error}</p>
        <button
          onClick={() => dispatch(postThunk())}
          className="mt-4 px-5 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
        >
          Спробувати знову
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-indigo-700 text-center mb-6">
        Список постів
      </h2>
      <ul className="space-y-4">
        {postList.map((post) => (
          <li
            key={post.id}
            className="p-4 border border-gray-200 rounded-xl hover:bg-indigo-50 transition"
          >
            <h3 className="font-semibold text-gray-800">{post.title}</h3>
            <p className="text-gray-600 mt-1 text-sm">ID поста: {post.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
