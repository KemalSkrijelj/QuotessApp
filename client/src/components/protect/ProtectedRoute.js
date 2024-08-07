import React from "react";
import Login from "../../pages/LoginPage/Login";
import SignUp from "../../pages/SignUp/SignUp";

const ProtectedRoute = ({ children }) => {
  const localLoggedInUser = localStorage.getItem("loggedInUser");

  if (localLoggedInUser) {
    return children;
  } else {
    return (localLoggedInUser ? <Login /> : <SignUp />);
  }
};

export default ProtectedRoute;
