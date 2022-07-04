import { Row, Text, Button } from "@nextui-org/react";
import React from "react";

const NavbarContent = ({ username, onLogout }) => {
  return (
    <Row justify="space-between" css={{ padding: "0 $12" }} align="center">
      <Text style={{ display: "flex", gap: 3 }}>
        ¡Bienvenido nuevamente
        <Text color="secondary">{`@${username}`}</Text>!
      </Text>

      <Button size={"sm"} onClick={onLogout}>
        Cerrar Sesión
      </Button>
    </Row>
  );
};

export default NavbarContent;
