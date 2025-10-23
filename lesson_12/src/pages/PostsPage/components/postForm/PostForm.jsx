import { useState } from "react";

const initialPostData = {
  authorId: "",
  title: "",
  body: "",
  likesNumber: "",
  dislikesNumber: "",
  createdAt: "",
};

function PostForm({ onCreatePost }) {
  const [postData, setPostData] = useState(initialPostData);

  const handlePostCreate = (e) => {
    setPostData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    onCreatePost({
      ...postData,
      authorId: Number(postData.authorId),
      likesNumber: Math.floor(Math.random() * 1001),
      dislikesNumber: Math.floor(Math.random() * 201),
      createdAt: new Date().toISOString(),
    });
    setPostData(initialPostData);
  };

  return (
    <form
      onSubmit={handleSubmitPost}
      className="max-w-xl w-full mx-auto bg-white/70 dark:bg-slate-800/60 p-6 rounded-lg shadow-md space-y-4"
    >
      <label className="block">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
          Заголовок <span className="text-red-500">*</span>
        </span>
        <input
          type="text"
          value={postData.title}
          onChange={handlePostCreate}
          name="title"
          required
          className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
          Текст поста <span className="text-red-500">*</span>
        </span>
        <textarea
          name="body"
          value={postData.body}
          onChange={handlePostCreate}
          required
          className="mt-1 block w-full min-h-[110px] px-3 py-2 border border-slate-300 rounded-md bg-white text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
          ID автора <span className="text-red-500">*</span>
        </span>
        <input
          type="number"
          name="authorId"
          value={postData.authorId}
          onChange={handlePostCreate}
          required
          className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400"
        />
      </label>

      <div className="flex items-center justify-end">
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm
                hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
        >
          Создать пост
        </button>
      </div>
    </form>
  );
}

export default PostForm;
