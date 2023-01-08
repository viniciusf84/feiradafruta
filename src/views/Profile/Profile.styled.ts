import styled from "styled-components";
import { rem, transitions } from "polished";
import { colors, fadeIn, devices } from "../../styles/variables";

export const Details = styled.article`
  ${fadeIn()};

  opacity: 1;
  margin-bottom: 60px;

  h1 {
    font-size: ${rem("40px")};
    margin: 0 0 2rem;
  }

  a.back {
    display: inline-block;
    background-color: none;
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    padding: 10px 0;
    margin: 30px 0 40px;
    ${transitions("background-color 0.2s ease-out")};

    &:hover {
      color: ${colors.text_1};
    }

    svg {
      margin-right: 8px;
    }
  }

  .row {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 2rem;
    flex-direction: column-reverse;

    @media ${devices.tablet} {
      flex-direction: row;
    }

    .col {
      width: 100%;

      @media ${devices.tablet} {
        width: 50%;
      }

      &__info {
        width: 100%;

        @media ${devices.tablet} {
          width: 70%;
        }
      }

      &__add {
        background-color: ${colors.white};
        padding: 16px 24px;

        @media ${devices.tablet} {
          width: 50%;
        }

        span {
          font-size: ${rem("12px")};
        }
      }

      .image-wrapper {
        animation: fadeIn 1s;
        background-color: ${colors.white};
        margin-bottom: 32px;

        figure {
          margin: 0 0 16px;
        }
      }
    }

    .list {
      padding: 0;
      margin: 0 0 16px;

      li {
        list-style: none;
        display: inline;

        &:after {
          content: ", ";
        }

        &:last-of-type {
          &:after {
            content: "";
          }
        }
      }
    }
  }

  .text {
    margin: 0 30px 0 0px;

    @media ${devices.tablet} {
      margin: 0 30px 0 20px;
    }

    p {
      margin-bottom: ${rem("14px")};
    }

    @media ${devices.tablet} {
      margin: 0;
    }

    span {
      font-weight: bold;
    }

    .price {
      font-size: ${rem("42px")};
      margin: 0;
    }
  }

  .small {
    display: block;
    margin: 10px 0;
    font-size: ${rem("13px")};
  }

  strong {
    color: ${colors.text_3};
    font-weight: normal;
  }

  .plot {
    margin-top: 2rem;
    color: ${colors.text_3};
  }

  a {
    color: ${colors.yellow};
  }
`;
