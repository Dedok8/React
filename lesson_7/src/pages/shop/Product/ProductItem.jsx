import { Link } from "react-router-dom";
import frontRoutes from "../../../routes/frontRoutes";
import styles from "./css/productItem.module.css";

function ProductItem({ id, title, price, image }) {
  return (
    <li className={styles["productItem"]}>
      <Link
        to={frontRoutes.navigate.products.getDetailLink(id)}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div>
          <img
            src={image}
            alt={image}
            style={{ maxWidth: "150px", marginBottom: "10px" }}
          />
        </div>
        <div>
          <h2>{title}</h2>
          <h3>{price}$</h3>
        </div>
      </Link>
    </li>
  );
}

export default ProductItem;
