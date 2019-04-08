import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { actionLogin } from "../../actions";
import "./header.css";

class Header extends Component {
  signInClick = event => {
    event.preventDefault();

    const email = this.email.value,
      pass = this.pass.value;

    this.props.actionLogin(email, pass);

    this.email.value = "";
    this.pass.value = "";
  };

  render() {
    if (!this.props.nameFromReducer) {
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
                    <Link className="nav-link" to="/menproducts">
                      Men
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/womenproducts">
                      Women
                    </Link>
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
                      Login
                    </a>
                    {/* login form */}
                    <div className="dropdown-menu dropdown-menu-right">
                      <form className="px-4 py-3">
                        <div className="form-group">
                          <label htmlFor="usernameform">Email Address</label>
                          <input
                            ref={input => (this.email = input)}
                            type="email"
                            className="form-control"
                            id="usernameform"
                            placeholder="email address"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="passwordform">Password</label>
                          <input
                            ref={input => (this.pass = input)}
                            type="password"
                            className="form-control"
                            id="passwordform"
                            placeholder="password"
                          />
                        </div>
                        <div>
                          <button
                            onClick={this.signInClick}
                            type="submit"
                            className="btn btn-dark"
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="id">
                        New around here? Sign Up
                      </a>
                      <a className="dropdown-item" href="id">
                        Forgot password
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="container-fluid mb-5">
          <nav className="row navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="col-md-1">
              <Link className="navbar-brand" to="/">
                Brand
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
                    <a className="nav-link" href="#id">
                      Men
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#id">
                      Women
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col=md-1 offset-md-7 ">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#id"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {this.props.nameFromReducer}
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
                        <a className="dropdown-item" href="/" id="signout">
                          Sign Out
                        </a>
                        <button
                          className="dropdown-item"
                          href="id"
                          id="myaccountbtn"
                        >
                          My Account
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
}

const mapStateToProps = state => {
  return {
    nameFromReducer: state.account.firstName
  };
};

export default connect(
  mapStateToProps,
  { actionLogin }
)(Header);
