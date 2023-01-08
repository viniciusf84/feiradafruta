import styled from "styled-components";
import { rem } from "polished";

export const StyledFooter = styled.footer`
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: $black;

  p {
    font-size: ${rem("12px")};
  }
`;
