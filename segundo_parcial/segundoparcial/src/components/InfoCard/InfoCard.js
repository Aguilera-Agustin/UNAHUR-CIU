import React from "react";
import { Grid } from "@nextui-org/react";
import { Card, Row, Text } from "@nextui-org/react";

const InfoCard = ({ img, title, category }) => {
  return (
    <Grid xs={6} sm={3}>
      <Card isPressable>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={img}
            objectFit="cover"
            width="100%"
            height={140}
            alt={title}
          />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text b>{title}</Text>
            <Text
              css={{
                color: "$accents7",
                fontWeight: "$semibold",
                fontSize: "$sm",
              }}
            >
              {category}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default InfoCard;
