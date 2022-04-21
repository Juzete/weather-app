import React from "react";
import { FlipButton } from "./components";

const BackwardSide = ({ setIsFlipped }) => {
  const onFlipButtonClickHandler = () => setIsFlipped(false);

  return <FlipButton onClick={onFlipButtonClickHandler}>Return</FlipButton>;
};

export default BackwardSide;
