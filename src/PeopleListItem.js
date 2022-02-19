import React from "react";
import './PeopleListItem.css';

export function PeopleListItem({ person }) {
  return (
    <div className="list-item-container">
      <h3>{person.name}</h3>
      <p>Age: {person.age}</p>
      <p>Hair color: {person.hairColor}</p>
    </div>
  );
}