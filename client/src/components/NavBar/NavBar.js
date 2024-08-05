import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <NavLink to={'/'} className='logo'>
            <h1>QuotesApp</h1>
          </NavLink>
        </div>
        <div className="buttons"></div>
      </div>
    </>
  );
};

export default NavBar;
