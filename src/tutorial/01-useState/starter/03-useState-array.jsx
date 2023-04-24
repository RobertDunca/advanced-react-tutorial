import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeAll = () => {
    setPeople([]);
  };
  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        return (
          <Person key={person.id} {...person} removePerson={removePerson} />
        );
      })}
      <button className="btn" onClick={removeAll} style={{ marginTop: "2rem" }}>
        Clear all
      </button>
    </div>
  );
};

const Person = ({ id, name, removePerson }) => {
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={() => removePerson(id)}>Delete</button>
    </div>
  );
};

export default UseStateArray;
