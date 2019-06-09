import React, { Component } from "react";
import { Link } from "react-router-dom";

import Modal from "./ModalCart";

class HeaderUsers extends Component {
  componentDidMount() {
    this.props.actionCart(this.props.userId);
    // console.log("component did mount header user");
  }

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

            <div className="col=md-1 offset-md-6 ">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <i className="d-inline-flex fas fa-search whiteText" />
                  <Link to="/search" className="d-inline-flex nav-link">
                    Search
                  </Link>
                </li>
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
                    <Link to="/order" className="dropdown-item">
                      Order
                    </Link>
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
                    <strong>{`Cart(${this.props.dataCart.length})`}</strong>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Modal
          dataCart={this.props.dataCart}
          total={this.CartTotal}
          remove={this.props.removeCart}
          checkout={this.props.checkout}
        />
      </div>
    );
  }
}

export default HeaderUsers;
