import React from "react";

export function CongratulationsMessage({ numberOfClicks, threshold, onHide }) {
  return numberOfClicks >= threshold ? 
    <>
      <h1>Congratulations! You've reached {threshold} number of clicks!</h1>
      <button onClick={onHide}>Hide</button>
    </>
    : null;
}