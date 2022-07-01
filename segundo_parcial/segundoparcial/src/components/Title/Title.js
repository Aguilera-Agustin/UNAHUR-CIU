import { Text } from "@nextui-org/react";
import React from "react";

const Title = ({ title }) => {
  return (
    <Text
      h1
      size={100}
      css={{
        textGradient: "45deg, $blue600 -20%, $pink600 50%",
      }}
      weight="black"
      style={{ textAlign: "center", letterSpacing: "0px" }}
    >
      {title}
    </Text>
  );
};

export default Title;
