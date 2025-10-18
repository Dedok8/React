import { addProduct, searchFilter } from "@/redux/slice/productSlice";
import { useDeferredValue, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProductTaskList() {
  const [searchProduct, setSearchProduct] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [errorAdd, setErrorAdd] = useState("");
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.sorted);

  const deferredVal = useDeferredValue(searchProduct);

  useEffect(() => {
    dispatch(searchFilter(deferredVal));
  }, [deferredVal, dispatch]);

  const handleSearch = (e) => {
    setSearchProduct(e.target.value);
  };

  const handleAdd = () => {
    if (newProduct.trim() === "") {
      setErrorAdd("Помилка: порожнє поле!");
      return;
    }
    setErrorAdd("");
    dispatch(addProduct(newProduct));
    setNewProduct("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Фільтр:
            <input
              type="text"
              onChange={handleSearch}
              value={searchProduct}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Пошук продуктів..."
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Новий продукт:
            <input
              type="text"
              onChange={(e) => setNewProduct(e.target.value)}
              value={newProduct}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Введіть назву продукту..."
            />
          </label>
          <button
            onClick={handleAdd}
            className="mt-3 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Додати
          </button>
          {errorAdd && (
            <p className="mt-2 text-sm text-red-600 font-medium">{errorAdd}</p>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Список продуктів
        </h2>
        <ul className="space-y-2">
          {products.length > 0 ? (
            products.map((product, i) => (
              <li
                key={i}
                className="px-4 py-3 bg-gray-50 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                {product}
              </li>
            ))
          ) : (
            <p className="text-gray-500 italic">Продуктів нема</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProductTaskList;
