import React from "react";
import Footer from "../../components/Footer/Footer";
import LoginContainer from "../../components/LoginContainer/LoginContainer";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginScreen = ({ onLogin }) => {
  return (
    <>
      <LoginContainer>
        <LoginForm onLogin={onLogin} />
      </LoginContainer>
      <Footer />
    </>
  );
};

export default LoginScreen;
