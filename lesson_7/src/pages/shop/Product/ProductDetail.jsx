import { useParams, useNavigate } from "react-router";
import useFetch from "../../../hooks/useFetch";
import { ApiRoutes } from "../../../api/ApiRoutes";
import styles from "../Product/css/productDetail.module.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    error,
  } = useFetch(ApiRoutes.getProductById(id));

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p style={{ color: "red" }}>Помилка: {error}</p>;
  if (!product) return <p>Товар не знайдено.</p>;

  return (
    <>
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className={styles["productDetImg"]}
      />
      <p>Ціна: {product.price}$</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </>
  );
}

export default ProductDetail;
