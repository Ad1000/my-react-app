import React from "react";
import { Button } from './Button';

export function CongratulationsMessage({ threshold, onHide }) {
  return (
    <>
      <h1>Congratulations! You've reached {threshold} number of clicks!</h1>
      <Button buttonColor="black" onClick={onHide}>Hide</Button>
    </>);
}