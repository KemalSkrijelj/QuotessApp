import React from "react";
import Home from "../../pages/Home/Home";

const ProtectedRoute = ({ children }) => {
  const localLoggedInUser = localStorage.getItem("loggedInUser");

  if (localLoggedInUser) {
    return children;
  } else {
    return <Home/>;
  }
};

export default ProtectedRoute;
