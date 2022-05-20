import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/auth-context";
import { auth } from "../../firebase-config";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const {
    authState: { token },
    authDispatch,
  } = useAuth();
  const loginOutHandler = async () => {
    if (token) {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      authDispatch({ type: "LOGOUT" });
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className={styles.nav_container}>
      <nav className={`navbar ${styles.container}`}>
        <div className="logo">
          <h1>Quizee</h1>
        </div>
        <ul className={styles.nav_links}>
          <li>
            <button
              to="/login"
              className={styles.login_btn}
              onClick={loginOutHandler}
            >
              {token ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
