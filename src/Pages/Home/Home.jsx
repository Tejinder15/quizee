import Header from "../../Components/Header/Header";
import hero from "../../Images/hero.png";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <section className={`${styles.hero_container} container`}>
        <div className={styles.hero_text_container}>
          <h2 className={styles.hero_text}>
            Get Smarter By Playing Knowledgeable and Exciting Quiz.
          </h2>
          <Link to="/category" className={styles.play_btn}>
            Play!
          </Link>
        </div>
        <div className={styles.hero_img_container}>
          <img src={hero} alt="hero" className={styles.hero_img} />
        </div>
      </section>
    </div>
  );
};

export default Home;
