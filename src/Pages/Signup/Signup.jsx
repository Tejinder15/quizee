import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./Signup.module.css";
import { auth } from "../../firebase-config";

const Signup = () => {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const [msg, setMsg] = useState(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    if (registerData.password === registerData.confirmPass) {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          registerData.email,
          registerData.password
        );
        if (response) {
          localStorage.setItem("token", response.user.accessToken);
          localStorage.setItem("user", response.user.email);
          setMsg("");
          setRegisterData({ email: "", password: "", confirmPass: "" });
          navigate("/");
          setTimeout(() => alert("Account Created Successfully!"), 3000);
        } else {
          throw new Error();
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      setMsg(true);
    }
  };

  const showPass = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };
  return (
    <div className="auth-container">
      <h2 className="center-text">Signup</h2>
      <form onSubmit={(e) => register(e)}>
        <div className="input-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            className="textfield"
            autoComplete="off"
            required
            value={registerData.email}
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type={visible ? "text" : "password"}
            name="password"
            required
            id="password"
            autoComplete="off"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirm_password">Confirm Password</label>
          <div className={styles.view_pass}>
            <input
              type={visible ? "text" : "password"}
              name="confirmPassword"
              id="confirm_password"
              className={styles.confirm_pass}
              required
              autoComplete="off"
              value={registerData.confirmPass}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  confirmPass: e.target.value,
                })
              }
            />
            <button onClick={(e) => showPass(e)} className={styles.visi_btn}>
              <span className="material-icons-outlined">
                {visible ? "visibility" : "visibility_off"}
              </span>
            </button>
          </div>
        </div>
        {msg && (
          <span className={`small-text ${styles.error}`}>
            Password and ConfirmPassword don't Match.
          </span>
        )}
        <button className="btn btn-primary">Create New Account</button>
      </form>
      <div className={styles.signup_group}>
        <Link to="/login" className={styles.signup_link}>
          Already have an account
        </Link>
        <span className="material-icons-outlined">navigate_next</span>
      </div>
    </div>
  );
};

export default Signup;
