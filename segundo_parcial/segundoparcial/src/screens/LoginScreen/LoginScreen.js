import React from "react";
import LoginContainer from "../../components/LoginContainer/LoginContainer";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginScreen = ({ onLogin }) => {
  return (
    <LoginContainer>
      <LoginForm onLogin={onLogin} />
    </LoginContainer>
  );
};

export default LoginScreen;
