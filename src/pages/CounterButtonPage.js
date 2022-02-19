import React, { useState } from "react";
import { CongratulationsMessage } from "../CongratulationsMessage";
import { CounterButton } from "../CounterButton";
import { useParams, useLocation } from "react-router-dom";
import { parse } from 'query-string'

export function CounterButtonPage() {
  // const { name } = useParams();
  const location = useLocation();
  const startingValue = parse(location.search).startingValue;
  // console.log(parse(location.search))
  const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue));
  const [hideMessage, setHideMessage] = useState(false);
  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <>
      <h1>The Counter Button Page</h1>
      {hideMessage ? null : (
        <CongratulationsMessage
          numberOfClicks={numberOfClicks}
          threshold={10}
          onHide={() => setHideMessage(true)}
        />
      )}
      <CounterButton numberOfClicks={numberOfClicks} onIncrement={increment} />
    </>
  );
}