import styled from "styled-components";
import { placeHolderShimmer } from "../../styles/variables";

export const ImageStyled = styled.figure`
  ${placeHolderShimmer()}
  position: relative;
  margin: 0;

  img {
    margin: 0;
    height: 100%;
    width: 100%;
    padding: 16px;

    object-fit: contain;

    &.hide {
      display: none;
    }

    &.show {
      display: block;
    }
  }
`;

export const Placeholder = styled.div`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1000px 104px;
  height: 200px;
  position: relative;
  overflow: hidden;
`;
