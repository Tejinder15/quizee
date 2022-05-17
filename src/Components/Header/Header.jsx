import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.nav_container}>
      <nav className={`navbar ${styles.container}`}>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <ul className="nav-links">
          <li className={styles.login_btn}>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
