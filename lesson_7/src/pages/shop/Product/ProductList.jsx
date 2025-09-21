import ProductItem from "./ProductItem";
import useFetch from "../../../hooks/useFetch";
import { ApiRoutes } from "../../../api/ApiRoutes";
import styles from "./css/productListItem.module.css";

function ProductList() {
  const { data: products, isLoading, error } = useFetch(ApiRoutes.productsList);

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p style={{ color: "red" }}>Помилка: {error}</p>;

  const listToRender = Array.isArray(products) ? products : [];

  if (listToRender.length === 0) return <p>Продукти не знайдено.</p>;

  return (
    <ul className={styles["productListItem"]}>
      {listToRender.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
        />
      ))}
    </ul>
  );
}

export default ProductList;
