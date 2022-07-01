import { Card, Container, Spacer } from "@nextui-org/react";
import React from "react";

const NavbarContainer = ({ children }) => {
  return (
    <Container xl>
      <Spacer />
      <Card>
        <Card.Body>{children}</Card.Body>
      </Card>
    </Container>
  );
};

export default NavbarContainer;
