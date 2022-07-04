import { Container, Grid, Text } from "@nextui-org/react";
import React from "react";

const Footer = () => {
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
            <Text size={12} color="secondary">
              Creado por Agustín Aguilera
            </Text>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
};

export default Footer;
