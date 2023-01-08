import styled from "styled-components";
import { centerContent } from "../../styles/variables";

export const LoadingContentStyled = styled.div`
  ${centerContent()};
  padding: 30px 0;
  margin-bottom: 60px;

  .loading-content__wrapper {
    p {
      margin-bottom: 16px;
    }
  }
`;
