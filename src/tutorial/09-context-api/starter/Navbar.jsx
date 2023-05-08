import { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks";

export const NavContext = createContext();

// custom hook useAppContext
export const useAppContext = () => useContext(NavContext);

const Navbar = () => {
  const robert = { name: "Robert" };
  const [user, setUser] = useState(robert);

  const login = () => {
    setUser(robert);
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <NavContext.Provider value={{ user, login, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavContext.Provider>
  );
};
export default Navbar;

// const NavLinks = () => {
//   return (
//     <div className="nav-container">
//       <ul className="nav-links">
//         <li>
//           <a href="#">home</a>
//         </li>
//         <li>
//           <a href="#">about</a>
//         </li>
//       </ul>
//       <UserContainer />
//     </div>
//   );
// };

// const UserContainer = () => {
//   const { user, login, logout } = useContext(NavContext);
//   return (
//     <div className="user-container">
//       {user ? (
//         <>
//           <p>Hello, {user.name}</p>
//           <button className="btn" onClick={logout}>
//             Logout
//           </button>
//         </>
//       ) : (
//         <>
//           <button className="btn" onClick={login}>
//             Login
//           </button>
//         </>
//       )}
//     </div>
//   );
// };
