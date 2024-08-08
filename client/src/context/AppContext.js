import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AppContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, UserProvider };
