import styles from "./style/main.module.css";

function MainBlock({ title, description, children }) {
  return (
    <div className={styles.MainBlock}>
      <h2 className={styles.title}>{title}</h2>
      {description && <p>{description}</p>}
      <div>{children}</div>
    </div>
  );
}

export default MainBlock;
