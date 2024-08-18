import React from "react";
import "./Header.css";
import {NavLink} from "react-router-dom"

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
           <NavLink to={'/'} className="navbar-brand" >
            StoreBuddy
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                 <NavLink to={'/'} className="nav-link active" aria-current="page" >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                 <NavLink to={'/'} className="nav-link"  >
                  Link
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                 <NavLink to={'/'}
                  className="nav-link dropdown-toggle"
                   
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                     <NavLink to={'/'} className="dropdown-item"  >
                      Action
                    </NavLink>
                  </li>
                  <li>
                     <NavLink to={'/'} className="dropdown-item"  >
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                     <NavLink to={'/'} className="dropdown-item"  >
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
             
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
