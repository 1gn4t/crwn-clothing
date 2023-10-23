import React from "react";
import { Label, Input, Group } from "./form-input.styles.jsx";

export default function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      <Input {...otherProps} />
      {label && <Label $shrink={otherProps.value.length}>{label}</Label>}
    </Group>
  );
}
