import logo from "./../logo.svg";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  return (
    <div>
      <header style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <img src={logo} width="80px" alt="logo" />
        <NavLink
          className={(active) => (active.isActive ? "active-link" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(active) => (active.isActive ? "active-link" : "")}
          to="/learn"
        >
          Learn
        </NavLink>
        <NavLink
          className={(active) => (active.isActive ? "active-link" : "")}
          to="/about"
        >
          About
        </NavLink>
      </header>
    </div>
  );
}

export default Menu;
