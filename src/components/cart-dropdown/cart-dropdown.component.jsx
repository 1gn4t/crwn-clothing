import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

import React, { useContext } from "react";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item" />
      {cartItems.map((product) => {
        return <CartItem key={product.id} product={product} />;
      })}
      <Button>CHECKOUT</Button>
    </div>
  );
}
