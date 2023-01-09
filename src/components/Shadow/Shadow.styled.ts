import styled from "styled-components";
import { rgba } from "polished";
import { colors } from "../../styles/variables";

export const ShadowStyled = styled.div`
  height: 100%;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;

  background-color: ${rgba(colors.black, 0.4)};
`;
