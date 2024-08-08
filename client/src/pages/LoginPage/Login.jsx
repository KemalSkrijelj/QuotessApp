import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { AppContext } from "../../context/AppContext";
import Modal from "../../components/Modal/Modal";

const Login = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);


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
      setShowModal(true); 
    } else {
      alert("Nisu ispravni kredencijali.");
    }
  };

  const handleModalClick = () => {
    setShowModal(false); 
    navigate("/quotes"); 
  };

  return (
    <>
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
              <Field type="email" name="email" placeholder="Enter your email" />
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

      {showModal && (
        <Modal
          onConfirm={handleModalClick}
          title="Login Successful"
          message="You have successfully logged in!"
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Login;
