import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedInUser({ token });
    }
  }, []);

  return (
    <AppContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, UserProvider };
