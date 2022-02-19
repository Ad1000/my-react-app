import React, { useEffect } from "react";

export function CounterButton({ numberOfClicks, onIncrement }) {
  useEffect(() => 
  {
        console.log("useEffect function called!");
        return () => console.log('unmounting!');
    }, [numberOfClicks]);
  return (
    <>
      <p>You've clicked the button {numberOfClicks} times.</p>
      <button onClick={onIncrement}>Clicked Me</button>
    </>
  );
}