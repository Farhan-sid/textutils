import React from "react";
import propTypes from "prop-types";
// import { Link } from "react-router-dom"

export default function Navbar({
  title = "Set title here",
  aboutText = "About",
  mode = "light",
  toggleMode, // Make sure toggleMode is passed as prop
}) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                {aboutText}
              </a>
            </li> */}
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary mx-2" type="submit">
              Search
            </button>
          </form> */}
          <div className="form-check form-switch">
            {/* Call toggleMode function onClick */}
            <input
              className="form-check-input"
              onClick={toggleMode} // Correctly call toggleMode
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{
                color: mode === "light" ? "black" : "white", // Change label text color dynamically
              }}
            >
              {mode === "light" ? "Dark Mode" : "Light Mode"}{" "}
              {/* Toggle the text */}
            </label>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: propTypes.string,
  aboutText: propTypes.string,
  mode: propTypes.string,
  toggleMode: propTypes.func, // Define toggleMode as a function
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
  mode: "light",
};
