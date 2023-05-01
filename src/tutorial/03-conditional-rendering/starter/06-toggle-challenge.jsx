import { useState } from "react";

const ToggleChallenge = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setIsClicked(!isClicked)}>
        Toggle
      </button>
      {isClicked && <OtherComponent />}
    </div>
  );
};

const OtherComponent = () => {
  return <h1>Other Component</h1>;
};

export default ToggleChallenge;
