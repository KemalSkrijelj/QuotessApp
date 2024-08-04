import { NavLink } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="login-box">
        <input type="username" placeholder="Username*" />
        <input type="password" placeholder="Password*" />
        <button className="btn-login">Login</button>
        <p style={{ color: "white" }}>
          I don't have an acc, please{" "}
          <NavLink style={{ color: "white" }} to={"/signUp"}>
            SignUp
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
