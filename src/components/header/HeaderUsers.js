import React, { Component } from "react";
import { Link } from "react-router-dom";

import Modal from "./ModalCart";

class HeaderUsers extends Component {
  render() {
    return (
      <div className="container-fluid mb-5">
        <nav className="row navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="col-md-1">
            <Link className="navbar-brand" to="/">
              <strong>B & C</strong>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarid"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarid">
            <div className="col-md-3">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link" href="/menproducts">
                    Men
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/womenproducts">
                    Women
                  </a>
                </li>
              </ul>
            </div>

            <div className="col=md-1 offset-md-7 ">
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
                    <a href="#id" className="dropdown-item">
                      Personal Information
                    </a>
                    <a href="#id" className="dropdown-item">
                      Order
                    </a>
                    <a href="#id" className="dropdown-item">
                      Newsletter
                    </a>

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
                      <Link
                        className="dropdown-item"
                        id="myaccountbtn"
                        to="/myaccount"
                      >
                        My Account
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item ml-3">
                  <button
                    className="btn btn-light"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Cart
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Modal />
      </div>
    );
  }
}

export default HeaderUsers;
