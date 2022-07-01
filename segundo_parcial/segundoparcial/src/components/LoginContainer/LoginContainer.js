import { Container, Spacer } from "@nextui-org/react";
import React from "react";

const LoginContainer = ({ children }) => {
  return (
    <>
      <Spacer y={8} />
      <Container xs alignItems="center" justify="center">
        {children}
      </Container>
    </>
  );
};

export default LoginContainer;
