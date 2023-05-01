import { useEffect, useState } from "react";
const CleanupFunction = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setIsClicked(!isClicked)}>
        Click me
      </button>
      {isClicked && <Second />}
    </>
  );
};

const Second = () => {
  useEffect(() => {
    console.log("Cleanup function");
    const intId = setInterval(() => {
      console.log("Hello");
    }, 1000);
    return () => {
      clearInterval(intId);
    };
  }, []);
  return <h2>Second Component</h2>;
};

export default CleanupFunction;
