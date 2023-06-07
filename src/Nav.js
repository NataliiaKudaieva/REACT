import { NavLink, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Battle from "./pages/Battle";

const navLinks = ["Home", "Popular", "Battle"];
const Nav = () => {
  return (
    <>
      <ul className="nav">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink to={link === "Home" ? "/" : link.toLocaleLowerCase()}>
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Nav;
