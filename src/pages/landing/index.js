import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../auth/login";

const Landing = () => {
  const auth = isAuthenticated();
  return (
    <div>
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">ConnectIN</h1>
                <span>Develper Shankar Ghimire</span>
                <p className="lead"> Assignment for Novelty</p>
                <hr />
                {auth ? (
                  <>
                    <Link to="/dashboard" className="btn btn-lg btn-info mr-2">
                      Dashboard
                    </Link>
                    <Link to="/user" className="btn btn-lg btn-light">
                      UserList
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/register" className="btn btn-lg btn-info mr-2">
                      Sign Up
                    </Link>
                    <Link to="/login" className="btn btn-lg btn-light">
                      Login
                    </Link>
                    <hr />
                    <h5>
                      To access dashboard and view UserList please First login,
                      If you are new user then register
                    </h5>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
