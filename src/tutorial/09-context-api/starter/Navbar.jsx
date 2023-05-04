import { useState } from "react";
const Navbar = () => {
  const robert = { name: "Robert" };
  const [user, setUser] = useState(robert);

  const logout = () => {
    setUser(null);
  };
  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks logout={logout} user={user} />
    </nav>
  );
};
export default Navbar;

const NavLinks = ({ logout, user }) => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UserContainer logout={logout} user={user} />
    </div>
  );
};

const UserContainer = ({ logout, user }) => {
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello, {user.name}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
