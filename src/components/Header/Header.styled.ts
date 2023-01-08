import styled from "styled-components";
import { rem, rgba, transitions } from "polished";
import { colors, devices } from "../../styles/variables";

export const HeaderStyled = styled.header`
  padding: 1rem 0rem;
  background-color: ${(props) => props.theme.colors.primary};
  ${transitions("background-color 0.2s ease-out")};

  .wrapper {
    display: flex;
  }

  a {
    color: ${colors.yellow};
  }

  .brand {
    font-size: ${rem("22px")};
    font-weight: bold;
    text-shadow: ${colors.blue} 2px 3px 0px;
    border-radius: 4px;
    padding: 0 10px 0 0;
    height: 30px;
    line-height: 30px;
    width: 33%;
  }

  .search-wrapper {
    width: 67%;
    position: relative;
  }

  .desktop {
    display: none;

    @media ${devices.tablet} {
      display: block;
    }
  }

  .mobile {
    display: block;

    .wrapper {
      justify-content: space-between;
    }

    .search-wrapper {
      width: 100%;
      padding: 0 16px;
      margin-top: 8px;
    }

    @media ${devices.tablet} {
      display: none;
    }
  }
`;

export const SubHeader = styled.div`
  background-color: ${(props) => rgba(props.theme.colors.primary, 0.4)};
  ${transitions("background-color 0.2s ease-out")};
`;
