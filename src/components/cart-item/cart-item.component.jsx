import React from "react";
import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles.jsx";

export default function CartItem({ product }) {
  const { name, imageUrl, price, quantity } = product;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}
