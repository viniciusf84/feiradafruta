import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CartButtonStyled } from "./CartButton.styled";

export default function CartButton({ icon, text, action }) {
  return (
    <CartButtonStyled onClick={action}>
      <FontAwesomeIcon icon={icon} /> {text}
    </CartButtonStyled>
  );
}
