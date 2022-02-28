import React from "react";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <>
      <header>
        <h1>DarthRoute</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <a>Home</a>
              </NavLink>
              <NavLink to="/search-page">
                <a>Search Page</a>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default NavBar;
