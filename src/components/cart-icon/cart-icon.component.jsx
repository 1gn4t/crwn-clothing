import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount, ShoppngIcon } from "./cart-icon.styles.jsx";

import React, { useContext } from "react";

export default function CardIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  return (
    <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)} className="cart-icon-container">
      <ShoppngIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
