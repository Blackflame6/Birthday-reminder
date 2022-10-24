import React from "react";
import List from "./List";

const Show = ({ people, setPeople, setOnePerson }) => {
  return people.map((person) => (
    <List
      person={person}
      setPeople={setPeople}
      people={people}
      setOnePerson={setOnePerson}
    />
  ));
};

export default Show;
