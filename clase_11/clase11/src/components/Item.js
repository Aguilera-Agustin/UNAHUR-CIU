import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";

const Item = ({ item }) => {
  const { title, stock, description, price, pictureUrl } = item;
  return (
    <Card className="cardContainer">
      <Card.Img variant="top" height={300} src={pictureUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="cardDescription">
          <Card.Text>{`Precio: $${price}`}</Card.Text>
          <Card.Text>{`Stock: ${stock}`}</Card.Text>
        </div>
        <ItemCount
          onAdd={() => {
            alert("Agregado al carrito");
          }}
          stock={stock}
          initial={0}
        />
      </Card.Body>
    </Card>
  );
};

export default Item;
