import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import { Container, Footer, Name, Price } from "./product-card.styles.jsx";

import React, { useContext } from "react";

export default function ProductCard({ product }) {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  return (
    <Container>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button onClick={() => addItemToCart(product)} buttonType="inverted">
        ADD TO CART
      </Button>
    </Container>
  );
}
