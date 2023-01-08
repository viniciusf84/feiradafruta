import React from "react";
import { LoadingContentStyled } from "./LoadingContent.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingContent = ({ isLoading, loadingText, children }) => {
  if (isLoading) {
    return (
      <LoadingContentStyled>
        <div className="loading-content__wrapper">
          <p>{loadingText}</p>
          <FontAwesomeIcon icon={faSpinner} size="3x" spin />
        </div>
      </LoadingContentStyled>
    );
  }

  return children;
};

export default LoadingContent;
