import { useTranslation } from "react-i18next";

export default function ProductCard({ product, children }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-2 flex flex-col items-center transition hover:shadow-lg w-full max-w-[180px] mx-auto h-64 relative">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="mb-1 w-32 h-32 object-contain rounded border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-700"
        />
      )}
      <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-0.5 text-center w-full truncate">
        {product.name}
      </h3>
      <div className="text-slate-600 dark:text-slate-300 mb-1 text-xs">
        <span className="font-bold">{product.price}</span> грн
      </div>
      {product.ownerName && (
        <div className="text-xs text-slate-400 mb-1">
          {t(`Product.owner`)}: {product.ownerName || product.ownerId}
        </div>
      )}
      {children}
    </div>
  );
}
