import { Field, Form, Formik } from "formik";
import { AppContext } from "../../context/AppContext";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (values) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    const localUserString = localStorage.getItem("user");
    const localUser = JSON.parse(localUserString);
    if (
      localUser &&
      user.email === localUser.email &&
      user.password === localUser.password
    ) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setLoggedInUser(user);
      navigate("/");
      navigate("/quotes");
      alert("Uspesno ste ulogovani");
    } else {
      alert("Nisu ispravni kredencijali.");
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form
          className="form-auth"
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "40vh",
            alignItems: "center",
          }}
        >
          <h1>Login</h1>
          <div
            className="inputs"
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
          <p>
            If you don't have an account, sign up{" "}
            <NavLink style={{ color: "white" }} to={"/signUp"}>
              here
            </NavLink>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
