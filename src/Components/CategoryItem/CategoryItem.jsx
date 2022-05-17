import styles from "./CategoryItem.module.css";

const CategoryItem = ({ title, image }) => {
  return (
    <div className={styles.category_item}>
      <img src={image} alt={title + "_image"} className="res-img" />
      <p className={styles.category_item_title}>{title}</p>
    </div>
  );
};

export default CategoryItem;
