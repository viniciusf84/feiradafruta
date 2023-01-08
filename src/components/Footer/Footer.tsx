import React from "react";
import { StyledFooter } from "./Footer.styled";

function Footer({ text }) {
  return (
    <StyledFooter id="footer">
      <p>{text}</p>
    </StyledFooter>
  );
}

export default Footer;
