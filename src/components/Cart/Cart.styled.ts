import styled from "styled-components";
import { rgba } from "polished";
import { colors } from "../../styles/variables";

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  gap: 1rem;
  font-size: 90%;
  margin: 0 20px 8px 0;
  padding: 0 0 8px;
  border-bottom: 1px solid ${rgba(colors.text_3, 0.3)};

  &:last-of-type {
    border: none;
  }

  figure {
    margin: 0;
    max-width: 70px;
  }

  .text {
    width: 100%;

    .space-between {
      display: flex;
      justify-content: space-between;
    }

    .title {
      color: ${colors.text_1};
    }

    .quantity,
    .price {
      color: ${colors.text_3};
    }

    .price {
      font-weight: bold;
      font-size: 120%;
    }
  }
`;

export const TotalSection = styled.section`
  background-color: ${colors.background_clear};
  width: calc(100% + 20px);
  margin: 0px -12px;
  padding: 12px 21px 12px 16px;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;
