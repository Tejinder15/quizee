import { Link } from "react-router-dom";
import styles from "./CategoryItem.module.css";

const CategoryItem = ({ title, image }) => {
  return (
    <Link to="/rules" className={styles.category_link}>
      <div className={styles.category_item}>
        <img src={image} alt={title + "_image"} className="res-img" />
        <p className={styles.category_item_title}>{title}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
