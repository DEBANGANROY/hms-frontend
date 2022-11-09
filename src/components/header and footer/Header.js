import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          {/* Minimise bars */}
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
          {/* Navbar icons */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Login */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/login">
                  Log In
                </a>
              </li>
              {/* Non-login */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu dropdown-menu-dark bg-dark">
                  <li id="doctors">
                    <a className="dropdown-item" href="/doctors">
                      Doctors
                    </a>
                  </li>
                  <li id="appointment">
                    <a className="dropdown-item" href="/appointments">
                      Appointment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/allAppointments">
                      ETC.
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* Search bar */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-info btn-outline-success" type="submit">
                Search
              </button>
            </form>

          </div>
        </div>
      </nav>
    </>
  );
}
Header.defaultProps = {
  title: "Hospital Management System",
};
Header.propTypes = {
  title: PropTypes.string,
};
