import React, { useState } from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const addQuantity = () => {
    quantity !== stock && setQuantity(quantity + 1);
  };
  const substractQuantity = () => {
    quantity !== 0 && setQuantity(quantity - 1);
  };

  return (
    <div className="itemCountContainer">
      <ButtonToolbar>
        <ButtonGroup className="me-2" aria-label="First group">
          <Button disabled={quantity === 0} onClick={substractQuantity}>
            -
          </Button>

          <div className="itemCountNumberContainer">
            <p className="itemCountNumber">{quantity}</p>
          </div>
          <Button disabled={quantity === stock} onClick={addQuantity}>
            +
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
      <Button disabled={quantity === 0} onClick={onAdd}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
