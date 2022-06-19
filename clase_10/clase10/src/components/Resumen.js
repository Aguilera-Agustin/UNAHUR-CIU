import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Resumen = ({ pizza, ammount, onDelete }) => {
  return (
    <Card style={{ width: "18rem", marginBottom: 10 }}>
      <Card.Body>
        <Card.Title>{`Pizza : ${pizza}`}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{`Abona con: $${ammount}`}</Card.Subtitle>
        <Button onClick={onDelete}>Eliminar</Button>
      </Card.Body>
    </Card>
  );
};

export default Resumen;
