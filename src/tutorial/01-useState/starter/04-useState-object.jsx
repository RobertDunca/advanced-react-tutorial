import { useState } from "react";

const UseStateObject = () => {
  const [state, setState] = useState({
    name: "John",
    age: 30,
    hobby: "Soccer",
  });

  const handleClick = () => {
    setState({
      name: "Jane",
      age: 21,
      hobby: "Reading",
    });
  };

  return (
    <>
      <h3>{state.name}</h3>
      <h3>{state.age}</h3>
      <h4>Enjoys {state.hobby}</h4>
      <button className="btn" onClick={handleClick}>
        Show Jane
      </button>
    </>
  );
};

export default UseStateObject;
