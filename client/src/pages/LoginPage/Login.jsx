import { Field, Form, Formik } from "formik";
import { AppContext } from "../../context/AppContext";
import { useContext, useState } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { NavLink, useNavigate } from "react-router-dom";
>>>>>>> main

const Login = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    const localUserString = localStorage.getItem("user");
    const localUser = JSON.parse(localUserString);
    if (
      user.email === localUser.email &&
      user.password === localUser.password
    ) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setLoggedInUser(user);
<<<<<<< HEAD
      navigate("/");
=======
      navigate("/quotes");
      alert("Uspesno ste ulogovani");
>>>>>>> main
    } else {
      alert("Nisu ispravni kredencijali.");
    }
  };

  return (
    <Formik>
      {(props) => (
<<<<<<< HEAD
        <Form className="form-auth" style={{display:"flex",flexDirection:"column", minHeight: "40vh", alignItems: "center" }}>
=======
        <Form
          className="form-auth"
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "40vh",
            alignItems: "center",
          }}
        >
>>>>>>> main
          <h1>Login</h1>
          <div
            className="inputs"
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              gap: "20px",
<<<<<<< HEAD
              marginTop:"20px"
=======
              marginTop: "20px",
>>>>>>> main
            }}
          >
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
<<<<<<< HEAD
          <button className="submit" type="submit" onClick={handleSubmit}>
            Submit
          </button>
=======
          <button
            className="submit"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <p>
            If you don't have acc, sign up{" "}
            <NavLink style={{ color: "white" }} to={"/signUp"}>
              here
            </NavLink>
          </p>
>>>>>>> main
        </Form>
      )}
    </Formik>
  );
};

export default Login;
<<<<<<< HEAD

=======
>>>>>>> main
