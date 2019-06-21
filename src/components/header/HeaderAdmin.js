import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { orderCountAction } from "./../../actions/index";

class HeaderAdmin extends Component {
  componentDidMount() {
    this.props.orderCountAction();
  }

  render() {
    return (
      <div className="container-fluid mb-5">
        <nav className="row navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="col-md">
            <span className="logo">
              <i className="fas fa-shoe-prints" />
            </span>
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
                    <span class="badge badge-light">{this.props.numOrder}</span>
                  </a>
                  {/* user form */}
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="/manage">
                      Menage Products
                    </Link>
                    <Link to="/order" className="dropdown-item">
                      Order
                      <span class="badge badge-light">
                        {this.props.numOrder}
                      </span>
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

const mapStateToProps = state => {
  return {
    numOrder: state.admin.order
  };
};

export default connect(
  mapStateToProps,
  { orderCountAction }
)(HeaderAdmin);
