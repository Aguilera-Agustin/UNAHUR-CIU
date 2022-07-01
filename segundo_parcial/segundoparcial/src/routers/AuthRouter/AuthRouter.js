import React from "react";
import { useAuth } from "../../hooks/useAuth";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import MainScreen from "../../screens/MainScreen/MainScreen";
import { getLocalStorage } from "../../utils/localStorage";

const AuthRouter = () => {
  const { auth, onLogin, onLogout } = useAuth(getLocalStorage("auth"));
  if (auth) {
    return <MainScreen onLogout={onLogout} username={auth.username} />;
  }
  return <LoginScreen onLogin={onLogin} />;
};

export default AuthRouter;
