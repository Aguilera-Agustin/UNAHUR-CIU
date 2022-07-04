import { Container, Grid, Text } from "@nextui-org/react";
import React from "react";

const HelperMessage = ({ icon, top, bottom }) => {
  return (
    <>
      <Container
        xs
        alignItems="center"
        css={{ marginTop: "$10" }}
        justify="center"
      >
        <Grid.Container>
          <Grid xs={12} justify="center">
            <Text b size={100} css={{ opacity: 0.2 }}>
              {icon}
            </Text>
          </Grid>
          <Grid xs={12} justify="center">
            <Text b size={24} css={{ opacity: 0.2 }}>
              {top}
            </Text>
          </Grid>
          <Grid xs={12} justify="center">
            <Text b size={24} css={{ opacity: 0.2 }}>
              {bottom}
            </Text>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
};

export default HelperMessage;
