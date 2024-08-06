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

  return (
    <>
      <div className="navbar">
        <div className="logo">
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
      </div>
    </>
  );
};

export default NavBar;
