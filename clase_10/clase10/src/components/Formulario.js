import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
const Formulario = ({ onSave }) => {
  const [pizzaInput, setPizzaInput] = useState("");
  const [ammountInput, setAmmountInput] = useState("");
  const [error, setError] = useState(false);
  const save = (e) => {
    e.preventDefault();
    if (pizzaInput && ammountInput) {
      onSave({ pizza: pizzaInput, ammount: ammountInput, id: Date.now() });
      setError(false);
      setPizzaInput("");
      setAmmountInput("");
      return;
    }
    setError(true);
  };
  return (
    <Form onSubmit={save}>
      <Form.Group className="mb-3" controlId="pizzaControl">
        <Form.Label>¿Qué pizza querés?</Form.Label>
        <Form.Control
          onChange={(e) => setPizzaInput(e.target.value)}
          type="text"
          value={pizzaInput}
          placeholder="Escribí tu pizza"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="montoControl">
        <Form.Label>¿Con cuánto vas a abonar?</Form.Label>
        <Form.Control
          value={ammountInput}
          onChange={(e) => setAmmountInput(e.target.value)}
          type="number"
          placeholder="Escribí el monto"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="button">
        Comprar
      </Button>
      {error && (
        <Alert variant="warning">Es necesario rellenar el formulario</Alert>
      )}
    </Form>
  );
};

export default Formulario;
