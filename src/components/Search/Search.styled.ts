import styled from "styled-components";
import { rem } from "polished";
import { colors, fadeIn, devices } from "../../styles/variables";

export const SearchResults = styled.section`
  ${fadeIn()};

  position: absolute;

  width: calc(100% - 32px);
  display: flex;
  margin-top: -4px;
  padding: 8px 16px;

  background-color: ${colors.white};

  animation: fadeIn 0.3s;

  @media ${devices.tablet} {
    width: 100%;
  }
`;

export const SearchItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    font-size: ${rem("14px")};
    text-transform: capitalize;
  }

  figure {
    max-width: 80px;
  }
`;
