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
};

export default ProtectedRoute;
