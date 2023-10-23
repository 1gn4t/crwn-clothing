import { CartContext } from "../../contexts/cart.context";
import {
  Container,
  ImageContainer,
  Span,
  Arrow,
  Value,
  RemoveButton,
  Quantity,
} from "./checkout-item.styles.jsx";

import React, { useContext } from "react";

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemToCart, addItemToCart, removeItemToCart } = useContext(CartContext);

  return (
    <Container>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Span>{name}</Span>
      <Quantity>
        <Arrow onClick={() => removeItemToCart(cartItem)}>&#10094;</Arrow>
        <span className="value">{quantity}</span>
        <Arrow onClick={() => addItemToCart(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <Span>{price * quantity}</Span>
      <RemoveButton onClick={() => clearItemToCart(cartItem)}>&#10005;</RemoveButton>
    </Container>
  );
}
