import { useState } from "react";
const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
    setEmail("");
    setName("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Controlled Inputs</h2>
      <div className="form-row">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="form-input"
          type="text"
          id="name"
          value={name}
        />
      </div>
      <div className="form-row">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="form-input"
          type="email"
          id="email"
          value={email}
        />
      </div>
      <button className="btn btn-block" type="submit">
        Submit
      </button>
    </form>
  );
};
export default ControlledInputs;
