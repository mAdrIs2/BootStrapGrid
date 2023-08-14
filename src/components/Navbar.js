import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <i className="fa-solid fa-list-ol"> </i> My ToDo App
      </div>
      <div className="nav-menu">
        <ul className="nav-list ">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
