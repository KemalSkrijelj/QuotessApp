import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { AppContext } from "../../context/AppContext";
import Modal from "../../components/Modal/Modal";

const Login = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    type: "",
  });

  const handleSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:8000/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const { accessToken } = data;

        localStorage.setItem("token", accessToken);
        setLoggedInUser({ token: accessToken });

        setModalContent({
          title: "Login Successful",
          message: "You have successfully logged in!",
          type: "success",
        });
        setShowModal(true);
      } else {
        setModalContent({
          title: "Login Failed",
          message: "Invalid credentials",
          type: "error",
        });
        setShowModal(true);
      }
    } catch (error) {
      setModalContent({
        title: "Error",
        message: "An error occurred during login",
        type: "error",
      });
      setShowModal(true);
    }
  };

  const handleModalClick = () => {
    if (modalContent.type === "success") {
      navigate("/quotes");
    }
    setShowModal(false);
  };

  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {() => (
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
                type="text"
                name="username"
                placeholder="Enter your username"
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

      {showModal && (
        <Modal
          onConfirm={handleModalClick}
          title={modalContent.title}
          message={modalContent.message}
          type={modalContent.type}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Login;
