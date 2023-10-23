import React from "react";
import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.styles.jsx";

const BUTTON_TYPES_CLASSES = {
  base: BaseButton,
  google: GoogleSignInButton,
  inverted: InvertedButton,
};

const getButton = (buttonType = "base") => BUTTON_TYPES_CLASSES[buttonType];

export default function Button({ children, buttonType, ...otherProps }) {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
}
