import React from "react";
import { NavLink,Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            <FiShoppingCart /> <span />
            Store Buddy
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link " aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/category"}
                  className="nav-link "
                  aria-current="page"
                >
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/cart"} className="nav-link">
                  Cart (0)
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/register"} className="nav-link">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/login"} className="nav-link">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
