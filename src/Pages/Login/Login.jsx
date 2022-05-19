import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/auth-context";
import { auth } from "../../firebase-config";
const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const { authState, authDispatch } = useAuth();
  const navigate = useNavigate();

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      if (response._tokenResponse.registered === true) {
        authDispatch({
          type: "LOGIN",
          payload: {
            user: response.user.email,
            token: response.user.accessToken,
          },
        });
        localStorage.setItem("user", response.user.email);
        localStorage.setItem("token", response.user.accessToken);
        navigate("/");
        setTimeout(() => alert("Successfully Logged In"), 1600);
      } else {
        console.log("user does not exist");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const guestLogin = (e, uemail, upass) => {
    e.preventDefault();
    setUserData({ ...userData, email: uemail, password: upass });
  };
  return (
    <div className="auth-container">
      <h2 className="form-heading center-text">Login</h2>
      <form onSubmit={loginHandler}>
        <div className="input-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            className="textfield"
            required
            autoComplete="off"
            id="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="lpassword">Password</label>
          <input
            type="password"
            name="password"
            id="lpassword"
            autoComplete="off"
            required
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
        <button
          className="btn btn-primary guest-btn"
          onClick={(e) => guestLogin(e, "test@gmail.com", "test@123")}
        >
          Login in as Guest
        </button>
      </form>
      <div className="signup-group">
        <Link to="/signup" className="signup-link">
          Create New Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
