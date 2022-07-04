import {
  Button,
  Card,
  Checkbox,
  Divider,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import React from "react";
import { useForm } from "../../hooks/useForm";
import LoginFormItem from "../LoginFormItem/LoginFormItem";

const LoginForm = ({ onLogin }) => {
  const { handleChange, handleSubmit, handleCheck } = useForm(onLogin);

  return (
    <Card as="form">
      <Card.Body>
        <Row justify="center" align="center">
          <Text h6 size={24} color="white">
            Iniciar Sesión
          </Text>
        </Row>
        <Spacer y={1} />
        <Divider />
        <Spacer y={2} />
        <LoginFormItem
          onChange={handleChange}
          name="username"
          placeHolder={"Nombre de usuario"}
        />
        <Spacer y={2} />
        <LoginFormItem
          onChange={handleChange}
          name="password"
          placeHolder={"Contraseña"}
          password
        />
        <Spacer y={2} />
        <Row justify="center" align="center" gap={1}>
          <Checkbox name="remember" onChange={handleCheck} />
          <Text>Recordarme</Text>
        </Row>
        <Spacer y={1} />
        <Row justify="center" align="center">
          <Button shadow onClick={handleSubmit}>
            Iniciar Sesión
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
