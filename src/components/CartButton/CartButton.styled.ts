import styled from "styled-components";
import { transitions, darken, rem, rgba } from "polished";
import { colors } from "../../styles/variables";

export const CartButtonStyled = styled.button`
  border: none;
  background-color: ${colors.green};
  color: ${colors.white};
  padding: 1.125rem 0;
  width: 100%;
  font-size: ${rem("20px")};
  margin-top: 16px;
  cursor: pointer;
  ${transitions("background-color 0.2s ease-out")};
  box-shadow: ${rgba(colors.black, 0.2)} 0px 2px 6px;

  svg {
    margin-right: 8px;
  }

  &:hover {
    background-color: ${darken(0.2, colors.green)};
  }
`;
