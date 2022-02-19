import React, { useEffect } from "react";
import { Redirect, useNavigate } from "react-router-dom";

export const ProtectedPage = () => {
  const isAuthed = false;

  // Two Approaches:

  // return isAuthed ?
  //     (<h1>Only authenticated users should be able to see this!</h1>);
  //     (<Redirect to="/"/>);

  const navigate = useNavigate();
  useEffect(() => { if (!isAuthed) navigate("/"); });
  return <h1>Only authenticated users should be able to see this!</h1>;
};