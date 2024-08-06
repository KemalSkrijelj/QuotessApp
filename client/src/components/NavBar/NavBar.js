<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
=======
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

const NavBar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
    navigate("login");
  };

>>>>>>> main
  return (
    <>
      <div className="navbar">
        <div className="logo">
<<<<<<< HEAD
          <NavLink to={'/'} className='logo'>
            <h1>QuotesApp</h1>
          </NavLink>
        </div>
        <div className="buttons"></div>
=======
          <NavLink to={"/"} className="logo">
            <h1>QuotesApp</h1>
          </NavLink>
        </div>
        <div className="buttons">
          {loggedInUser && (
            <button
              className="btn-logout"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
>>>>>>> main
      </div>
    </>
  );
};

export default NavBar;
