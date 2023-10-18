import { ReactComponent as ShoppngIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

import React, { useContext } from "react";

export default function CardIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  return (
    <div onClick={() => setIsCartOpen(!isCartOpen)} className="cart-icon-container">
      <ShoppngIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}
