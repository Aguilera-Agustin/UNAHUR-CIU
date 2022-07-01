import React from "react";
import { useAuth } from "../../hooks/useAuth";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import MainScreen from "../../screens/MainScreen/MainScreen";

const AuthRouter = () => {
  const { auth, onLogin, onLogout } = useAuth();
  if (auth) {
    return <MainScreen onLogout={onLogout} username={auth.username} />;
  }
  return <LoginScreen onLogin={onLogin} />;
};

export default AuthRouter;
