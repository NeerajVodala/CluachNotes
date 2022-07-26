import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const authInitialState = {
    isLoggedIn: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token"),
    user: JSON.parse(localStorage.getItem("user")),
  };

  const [authState, setAuthState] = useState(authInitialState);

  useEffect(() => {
    setAuthState({
      isLoggedIn: localStorage.getItem("token") ? true : false,
      token: localStorage.getItem("token"),
      user: JSON.parse(localStorage.getItem("user")),
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
