import {
  useAddPostMutation,
  useGetPostByIdQuery,
  useUpdatePostsMutation,
} from "@/api/postsApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function PostForm({ postId }) {
  const navigate = useNavigate();

  const {
    data: post,
    isLoading: isLoadingPost,
    isError: isLoadError,
  } = useGetPostByIdQuery(postId, { skip: !postId });

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [
    addPost,
    { isLoading: isAdding, isError: isAddError, error: addError },
  ] = useAddPostMutation();

  const [
    updatePost,
    { isLoading: isUpdating, isError: isUpdateError, error: updateError },
  ] = useUpdatePostsMutation();

  useEffect(() => {
    if (post) {
      setTitle(post.title || "");
      setBody(post.body || "");
    }
  }, [post]);

  const isSubmitting = isAdding || isUpdating;
  const isSubmitError = isAddError || isUpdateError;
  const error = addError || updateError;
  const isEditMode = Boolean(postId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditMode) {
        await updatePost({ id: postId, title, body }).unwrap();
      } else {
        await addPost({ title, body }).unwrap();
        setTitle("");
        setBody("");
      }
      navigate("/posts");
    } catch (err) {
      console.error("Помилка при збереженні поста:", err);
    }
  };

  const handleCancel = () => {
    navigate("/posts");
  };

  if (isLoadingPost) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-2"></div>
          <p className="text-lg text-gray-600">Завантаження...</p>
        </div>
      </div>
    );
  }

  if (isLoadError) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-center">
          <p className="text-red-600 font-medium mb-4">
            Помилка завантаження поста
          </p>
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Повернутись до списку
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {isEditMode ? "Редагування поста" : "Створення нового поста"}
        </h2>
        <p className="text-gray-600 mt-1">
          {isEditMode
            ? "Внесіть зміни у ваш пост"
            : "Заповніть форму для створення нового поста"}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white rounded-lg shadow-md p-6"
      >
        <div className="space-y-2">
          <label htmlFor="title" className="block">
            <span className="text-sm font-semibold text-gray-700 mb-1 block">
              Заголовок <span className="text-red-500">*</span>
            </span>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900"
              placeholder="Введіть заголовок поста"
              minLength={3}
              maxLength={200}
            />
            <span className="text-xs text-gray-500 mt-1 block">
              {title.length}/200 символів
            </span>
          </label>
        </div>

        <div className="space-y-2">
          <label htmlFor="body" className="block">
            <span className="text-sm font-semibold text-gray-700 mb-1 block">
              Текст поста <span className="text-red-500">*</span>
            </span>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              disabled={isSubmitting}
              rows="8"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900"
              placeholder="Введіть текст поста"
              minLength={10}
            />
            <span className="text-xs text-gray-500 mt-1 block">
              Мінімум 10 символів
            </span>
          </label>
        </div>

        {isSubmitError && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="text-sm font-medium text-red-800">
                  Помилка при збереженні
                </p>
                <p className="text-sm text-red-700 mt-1">
                  {error?.data?.message ||
                    "Не вдалося зберегти пост. Спробуйте ще раз."}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            type="button"
            onClick={handleCancel}
            disabled={isSubmitting}
            className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Скасувати
          </button>
          <button
            type="submit"
            disabled={isSubmitting || !title.trim() || !body.trim()}
            className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>{isEditMode ? "Оновлення..." : "Додавання..."}</span>
              </>
            ) : (
              <span>{isEditMode ? "Оновити пост" : "Додати пост"}</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
