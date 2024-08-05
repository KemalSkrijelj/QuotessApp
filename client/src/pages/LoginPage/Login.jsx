import { Field, Form, Formik } from "formik";
import { AppContext } from "../../context/AppContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      navigate("/");
    } else {
      alert("Nisu ispravni kredencijali.");
    }
  };

  return (
    <Formik>
      {(props) => (
        <Form className="form-auth" style={{display:"flex",flexDirection:"column", minHeight: "40vh", alignItems: "center" }}>
          <h1>Login</h1>
          <div
            className="inputs"
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              gap: "20px",
              marginTop:"20px"
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
          <button className="submit" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;

