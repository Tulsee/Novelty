import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { authHeader } from "../auth/authHeader";
import { logout } from "../auth/login";

const Header = () => {
  const [authenticated, setAuthenticated] = useState(undefined);

  useEffect(() => {
    authHeader().then((data) => {
      if (data.id) {
        setAuthenticated(data);
      }
      console.log(data);
    });
  }, []);
  const logOut = () => {
    logout();
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Novelty
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="mobile-nav">
          {authenticated && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  {" "}
                  Dashboard
                </Link>
              </li>
            </ul>
          )}

          {authenticated ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/" onClick={logOut}>
                  logout
                </a>
              </li>
              <li className="nav-item">
                <p className="nav-link">{authenticated.name}</p>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Login
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
