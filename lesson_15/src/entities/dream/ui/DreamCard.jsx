function DreamCard({ dream, action }) {
  return (
    <li className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-xl p-6 shadow-md hover:shadow-xl hover:border-emerald-400 transition-all duration-300 hover:-translate-y-1 animate-fadeIn">
      <h3 className="mb-4">
        <strong className="text-emerald-800 font-semibold text-sm uppercase tracking-wide">
          Заголовок:{" "}
        </strong>
        <span className="text-gray-800 text-lg font-medium">{dream.title}</span>
      </h3>
      <div className="flex gap-2 flex-wrap">{action}</div>
    </li>
  );
}

export default DreamCard;
