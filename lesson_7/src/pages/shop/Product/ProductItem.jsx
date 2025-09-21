import { Link } from "react-router-dom";
import frontRoutes from "../../../routes/frontRoutes";
import styles from "./css/productItem.module.css";

function ProductItem({ id, name, price, imageUrl }) {
  return (
    <li className={styles["productItem"]}>
      <Link
        to={frontRoutes.navigate.products.getDetailLink(id)}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div>
          <img
            src={imageUrl}
            alt={imageUrl}
            style={{ maxWidth: "150px", marginBottom: "10px" }}
          />
        </div>
        <div>
          <h2>{name}</h2>
          <h3>{price}$</h3>
        </div>
      </Link>
    </li>
  );
}

export default ProductItem;
