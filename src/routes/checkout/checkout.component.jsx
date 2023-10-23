import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Container, Header, Block, Total } from "./checkout.styles.jsx";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

export default function Checkout() {
  const { cartItems, total } = useContext(CartContext);
  return (
    <Container>
      <Header>
        <Block>
          <span>Product</span>
        </Block>
        <Block>
          <span>Description</span>
        </Block>
        <Block>
          <span>Quantity</span>
        </Block>
        <Block>
          <span>Price</span>
        </Block>
        <Block>
          <span>Remove</span>
        </Block>
      </Header>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${total}</Total>
    </Container>
  );
}
