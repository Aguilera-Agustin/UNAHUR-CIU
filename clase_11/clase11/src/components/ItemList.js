import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { getMockedItems } from "../mocks/itemMock";
import Item from "./Item";

const Loading = () => {
  return (
    <div className="spinnerContainer">
      <Spinner animation="border" role="status" />
    </div>
  );
};

const ItemList = () => {
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      const res = await getMockedItems();
      setItems(res);
      setLoading(false);
    };
    getItems();
  }, []);

  return (
    <Container>
      <Row>
        {loading && <Loading />}
        {items &&
          items.map((item) => (
            <Col className="colSpace" id={item.id}>
              <Item item={item} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ItemList;
