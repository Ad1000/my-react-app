import React, { useState } from "react";
import { CongratulationsMessage } from "../CongratulationsMessage";
import { CounterButton } from "../CounterButton";
import { useParams, useLocation } from "react-router-dom";
import { parse } from 'query-string'
import { DisplayIf } from "../DisplayIf";

export function CounterButtonPage() {
  // const { name } = useParams();
  const location = useLocation();
  const startingValue = parse(location.search).startingValue || 0;
  // console.log(parse(location.search))
  const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue));
  const [hideMessage, setHideMessage] = useState(false);
  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <>
      <h1>The Counter Button Page</h1>
      <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
        <CongratulationsMessage threshold={10} onHide={() => setHideMessage(true)} />
      </DisplayIf>
      <CounterButton numberOfClicks={numberOfClicks} onIncrement={increment} />
    </>
  );
}