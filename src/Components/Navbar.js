import React, {useState} from "react";
import logo from "./logo.svg";
import PropTypes from "prop-types";

export default function Navbar(props) {
  
  // const [mode,setMode] = useState("light");

  // const darkToggle = () =>{
  //     if(mode === "light") setMode("dark");
  //     else setMode("light");
  // }
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={props.mode}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt={props.title}
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          {props.title}
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                rel="noreferrer"
              >
                {props.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
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
                {props.dropdown}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    {props.dropdown1}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    {props.dropdown2}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    {props.dropdown3}
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    {" "}
                    {props.dropdownDiv1}
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.help}
              </a>
            </li>
          </ul>
          <div className="form-check form-switch mx-2">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.darkToggle}
            />
            <label className={`form-check-label text-${props.mode === 'light'? 'dark':'light'}`} htmlFor="flexSwitchCheckChecked" >
              Dark mode
            </label>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title",
  home: "Set Home",
  about: "Set About",
};
