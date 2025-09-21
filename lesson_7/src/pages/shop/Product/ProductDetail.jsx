import { useParams, useNavigate } from "react-router";
import useFetch from "../../../hooks/useFetch";
import { ApiRoutes } from "../../../api/ApiRoutes";
import styles from "./css/ProductDetail.module.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: products, isLoading, error } = useFetch(ApiRoutes.productsList);

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p style={{ color: "red" }}>Помилка: {error}</p>;

  const product = products?.find((prod) => prod.id === parseInt(id));

  if (!product) return <p>Товар не знайден</p>;

  return (
    <>
      <h1>{product.title}</h1>
      <img
        src={product.imageUrl}
        alt={product.title}
        className={styles["productDetImg"]}
      />
      <p>Ціна: {product.price}$</p>
      {product.discount && <p>Знижка: {product.discount}%</p>}
      <button onClick={() => navigate(-1)}>Назад</button>
    </>
  );
}

export default ProductDetail;
