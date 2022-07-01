import { Grid } from "@nextui-org/react";
import React from "react";

const InfoCardsContainer = ({ children }) => {
  return (
    <Grid.Container css={{ padding: "$12" }} gap={2} justify="flex-start">
      {children}
    </Grid.Container>
  );
};

export default InfoCardsContainer;
