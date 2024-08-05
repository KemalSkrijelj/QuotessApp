/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <AppContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AppContext.Provider>
  );
};


export { AppContext, UserProvider  };
