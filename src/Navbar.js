import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <section className="header">
        <div className="container-fluid">
          <div className="row col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar_bg">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  Just Ask
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to="/justask/">
                        Home
                      </NavLink>
                    </li>
                    <li classNameName="nav-item">
                      <NavLink
                        activeClassName="clickstyle"
                        className="nav-link"
                        to="/justask/services"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li classNameName="nav-item">
                      <NavLink
                        activeClassName="clickstyle"
                        className="nav-link"
                        to="/justask/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li classNameName="nav-item">
                      <NavLink
                        activeClassName="clickstyle"
                        className="nav-link"
                        to="/justask/about"
                      >
                        About
                      </NavLink>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
