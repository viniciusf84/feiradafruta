import styled from "styled-components";
import { rem, transitions } from "polished";
import { colors } from "../../styles/variables";

export const SearchInputStyled = styled.div`
  font-size: ${rem("12px")};
  color: ${colors.text_3};

  input {
    background: ${colors.white};
    border: none;
    padding: 0.4rem;
    width: 100%;
    font-size: ${rem("14px")};
    font-weight: normal;
    border-radius: 8px;

    &:focus,
    &:active {
      border-color: ${colors.white};
    }
  }

  .icon__wrapper {
    background-color: transparent;
    border: none;
    color: ${colors.text_3};
    cursor: pointer;
    float: right;
    margin: -28px 8px 0 0;
    position: relative;

    ${transitions("color 0.2s ease-out")};

    &:disabled {
      color: ${colors.text_3};
      cursor: none;
    }

    &:not([disabled]) {
      &:hover {
        color: ${colors.text_1};
      }
    }

    svg {
      width: 0.9rem;
    }
  }
`;
