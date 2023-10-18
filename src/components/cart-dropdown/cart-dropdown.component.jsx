import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

import React from "react";

export default function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item" />
      <Button>CHECKOUT</Button>
    </div>
  );
}
