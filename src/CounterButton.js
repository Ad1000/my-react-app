import React, { useEffect } from "react";
import { Button } from './Button';

export function CounterButton({ numberOfClicks, onIncrement }) {
  useEffect(() => 
  {
        console.log("useEffect function called!");
        return () => console.log('unmounting!');
    }, [numberOfClicks]);
  return (
    <>
      <p>You've clicked the button {numberOfClicks} times.</p>
      <Button buttonColor="red" onClick={onIncrement}>Clicked Me</Button>
    </>
  );
}