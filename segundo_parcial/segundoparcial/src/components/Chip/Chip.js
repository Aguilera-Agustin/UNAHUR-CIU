import React from "react";
import { Card, Text } from "@nextui-org/react";

const Chip = ({ children, onPress }) => {
  return (
    <Card
      css={{
        justifyContent: "center",
        marginRight: "$10",
        width: "fit-content",
      }}
      isPressable
      onPress={onPress}
    >
      <Card.Body css={{ padding: "$0 $5", height: "$12" }}>
        <Text size={12} color="white" css={{ m: 0 }}>
          {children}
        </Text>
      </Card.Body>
    </Card>
  );
};

export default Chip;
