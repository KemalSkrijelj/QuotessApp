import { NavLink } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="textBox">
          <h1>Welcome to QuotesApp</h1>
          <h2>
            Welcome to your daily dose of inspiration—discover, save, and share
            your favorite quotes!
          </h2>
          <h3>
            If you want to see the{" "}
            <NavLink
              style={{ textDecoration: "none", color: "rgb(0,98,98)" }}
              to={"/quotes"}
            >
              quotes
            </NavLink>
            , you need to{" "}
            <NavLink
              style={{ textDecoration: "none", color: "rgb(0,98,98)" }}
              to={"/login"}
            >
              log in.
            </NavLink>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Home;
