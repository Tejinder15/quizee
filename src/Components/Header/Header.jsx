import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.nav_container}>
      <nav className={`navbar ${styles.container}`}>
        <div className="logo">
          <h1>Quizee</h1>
        </div>
        <ul className={styles.nav_links}>
          <li>
            <Link to="/login" className={styles.login_btn}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
