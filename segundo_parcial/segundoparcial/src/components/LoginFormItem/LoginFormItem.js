import { Input, Row } from "@nextui-org/react";
import React from "react";

const LoginFormItem = ({ password, placeHolder, ...rest }) => {
  return (
    <Row justify="center" align="center">
      {password ? (
        <Input.Password
          clearable
          bordered
          labelPlaceholder={placeHolder}
          width="50%"
          {...rest}
        />
      ) : (
        <Input
          clearable
          bordered
          labelPlaceholder={placeHolder}
          width="50%"
          {...rest}
        />
      )}
    </Row>
  );
};

export default LoginFormItem;
