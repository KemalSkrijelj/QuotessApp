<<<<<<< HEAD
import React, { useContext, useEffect } from "react";
import { TokenContext } from "../../context/TokenContext";
import LoginPage from "../../pages/LoginPage/Login";

const ProtectedRoute = ({ children }) => {
  const { accessToken } = useContext(TokenContext);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);
  return (
    <>
      {!localStorage.getItem("accessToken") ? <LoginPage /> : <>{children}</>}
    </>
  );
=======
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
>>>>>>> main
};

export default ProtectedRoute;
