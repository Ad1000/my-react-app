import React from "react";
import { PeopleListItem } from "./PeopleListItem";
// import styled from 'styled-components';

// const Wrapper = styled.div` border: 2px solid white; padding: 32px;`;

export function PeopleList({ people }) {
  return (
    <>
      {people.map(person => <PeopleListItem person={person} key={person.name}/>)}
    </>
  );
}