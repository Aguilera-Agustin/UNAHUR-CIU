import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
const App = () => {
  const [pizza, setPizza] = useState([]);
  const addPizza = (newPizza) => {
    setPizza([...pizza, newPizza]);
  };
  const deletePizza = (id) => {
    setPizza(pizza.filter((p) => p.id !== id));
  };
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="mainTitle">Pizzería El Mangrullo</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Formulario onSave={addPizza} />
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          {pizza?.map((eachPizza) => (
            <Resumen
              key={eachPizza.id}
              pizza={eachPizza.pizza}
              ammount={eachPizza.ammount}
              onDelete={() => deletePizza(eachPizza.id)}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
