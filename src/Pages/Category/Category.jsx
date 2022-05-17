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
      <section className={styles.category_section}>
        <div className={styles.category_container}></div>
        <CategoryItem title="Maths" image={maths} />
        <CategoryItem title="English" image={english} />
        <CategoryItem title="Science" image={science} />
      </section>
    </div>
  );
};

export default Category;
