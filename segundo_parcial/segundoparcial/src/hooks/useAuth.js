import { useState } from "react";
import { removeLocalStorage, setLocalStorage } from "../utils/localStorage";

export const useAuth = (initialState) => {
  const [auth, setAuth] = useState(initialState);
  const onLogin = ({ username, password, check }) => {
    if (username === "admin" && password === "admin") {
      check && setLocalStorage("auth", { username });
      return setAuth({ username, password });
    }
    return alert("usuario: admin, contraseña: admin");
  };

  const onLogout = () => {
    setAuth(null);
    removeLocalStorage("auth");
  };
  return { auth, onLogin, onLogout };
};
