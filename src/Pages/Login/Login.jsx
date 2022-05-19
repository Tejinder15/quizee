import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="auth-container">
      <h2 className="form-heading center-text">Login</h2>
      <form action="" method="post">
        <div className="input-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            className="textfield"
            required
            autoComplete="off"
            id="email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="lpassword">Password</label>
          <input
            type="password"
            name="password"
            required
            id="lpassword"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <button type="submit" className="btn btn-primary guest-btn">
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
