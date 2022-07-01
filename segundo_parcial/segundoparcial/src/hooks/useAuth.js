import { useState } from "react";

export const useAuth = (initialState) => {
  const [auth, setAuth] = useState(initialState);
  const onLogin = ({ username, password }) => {
    if (username === "admin" && password === "admin") {
      return setAuth({ username, password });
    }
    return alert("usuario: admin, contraseña: admin");
  };

  const onLogout = () => {
    setAuth(null);
  };
  return { auth, onLogin, onLogout };
};
