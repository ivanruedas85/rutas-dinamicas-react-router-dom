import React from "react";
import { NavLink as Link } from "react-router-dom";
import "../styles.css";

const NavLink = ({ to, children, ...props }) => {
  return (
    <Link
      {...props}
      className={({ isActive }) => (isActive ? "active" : "")}
      to={to}
    >
      {children}
    </Link>
  );
};
export default NavLink;
