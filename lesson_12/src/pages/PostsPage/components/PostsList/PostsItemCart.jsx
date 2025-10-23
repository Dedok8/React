function PostsItemCart({ postsData, onDeletePost }) {
  const handleDelete = () => {
    onDeletePost(postsData.id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-xl font-semibold text-gray-800 mb-2">
        {postsData.title}
      </div>
      <div className="text-gray-600 mb-4">{postsData.body}</div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <span className="text-green-600 font-medium">
            👍 {postsData.likesNumber}
          </span>
          <span className="text-red-500 font-medium">
            👎 {postsData.dislikesNumber}
          </span>
        </div>
        <div className="text-sm text-gray-500">
          Автор: <span className="font-medium">{postsData.authorId}</span>
        </div>
      </div>
      <div>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
        >
          Видалити
        </button>
      </div>
    </div>
  );
}

export default PostsItemCart;
