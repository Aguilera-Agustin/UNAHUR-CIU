import React from "react";
import { Card, Text } from "@nextui-org/react";

const Chip = ({ children }) => {
  return (
    <Card
      css={{
        justifyContent: "center",
        marginRight: "$10",
        width: "fit-content",
      }}
    >
      <Card.Body css={{ padding: "$0 $10", height: "$12" }}>
        <Text size={15} color="white" css={{ m: 0 }}>
          {children}
        </Text>
      </Card.Body>
    </Card>
  );
};

export default Chip;
