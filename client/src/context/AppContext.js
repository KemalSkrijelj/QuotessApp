<<<<<<< HEAD
/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
=======
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
>>>>>>> main

const AppContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

<<<<<<< HEAD
=======
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

>>>>>>> main
  return (
    <AppContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AppContext.Provider>
  );
};

<<<<<<< HEAD

export { AppContext, UserProvider  };
=======
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, UserProvider };
>>>>>>> main
