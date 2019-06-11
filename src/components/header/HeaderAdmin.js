import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderAdmin extends Component {
  render() {
    return (
      <div className="container-fluid mb-5">
        <nav className="row navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="col-md">
            <Link className="navbar-brand" to="/">
              <strong>B & C</strong>
            </Link>
          </div>
          <div className="col-md">
            <div className="d-flex justify-content-end mr-5">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle whiteText"
                    href="#id"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {this.props.userName}
                  </a>
                  {/* user form */}
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="/">
                      Menage Products
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Order
                    </Link>
                    <div className="dropdown-divider" />
                    <div className="d-flex flex-row">
                      <button
                        onClick={() => {
                          this.props.fnLogout();
                        }}
                        className="dropdown-item"
                        id="signout"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderAdmin;
