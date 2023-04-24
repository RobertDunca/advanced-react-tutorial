import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      setCount((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  return (
    <>
      <h1>{count}</h1>
      <button className="btn" onClick={handleClick}>
        increase count
      </button>
    </>
  );
};

export default UseStateGotcha;
