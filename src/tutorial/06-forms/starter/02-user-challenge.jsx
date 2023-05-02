import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    setUsers([...users, { id: users.at(-1).id + 1, name }]);
    setName("");
  };
  const handleDelete = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-input"
            id="name"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {users.map((item) => {
        return <Person handleDelete={handleDelete} {...item} key={item.id} />;
      })}
    </div>
  );
};
export default UserChallenge;

const Person = ({ name, id, handleDelete }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button className="btn" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};
