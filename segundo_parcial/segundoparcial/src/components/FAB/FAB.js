import { Button } from "@nextui-org/react";
import React from "react";

const FAB = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      css={{ position: "fixed", bottom: "30px", right: "50px" }}
      auto
      color="primary"
      icon={<p>🌗</p>}
    />
  );
};

export default FAB;
