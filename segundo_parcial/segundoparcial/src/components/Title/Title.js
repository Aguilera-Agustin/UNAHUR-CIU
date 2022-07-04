import { Text } from "@nextui-org/react";
import React from "react";

const Title = ({ title }) => {
  return (
    <Text
      h1
      size={50}
      css={{
        textGradient: "45deg, $blue600 -20%, $pink600 50%",
        textAlign: "center",
        letterSpacing: "0px",
      }}
      weight="black"
    >
      {title}
    </Text>
  );
};

export default Title;
