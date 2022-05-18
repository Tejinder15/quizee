import CategoryItem from "../../Components/CategoryItem/CategoryItem";
import Header from "../../Components/Header/Header";
import english from "../../Images/English.png";
import maths from "../../Images/Mathematics.png";
import science from "../../Images/Science.png";
import styles from "./Category.module.css";

const Category = () => {
  return (
    <div>
      <Header />
      <div className={styles.category_container}>
        <CategoryItem title="Maths" image={maths} />
        <CategoryItem title="English" image={english} />
        <CategoryItem title="Science" image={science} />
      </div>
    </div>
  );
};

export default Category;
