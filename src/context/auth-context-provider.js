import { createContext, useContext } from "react";

const AuthContext = createContext();

import React from "react";

function AuthContextProvider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

const useAuth = () => useContext(AuthContext);