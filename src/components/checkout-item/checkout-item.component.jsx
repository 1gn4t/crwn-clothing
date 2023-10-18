import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

import React, { useContext } from "react";

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemToCart, addItemToCart, removeItemToCart } = useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeItemToCart(cartItem)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItemToCart(cartItem)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => clearItemToCart(cartItem)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
}
