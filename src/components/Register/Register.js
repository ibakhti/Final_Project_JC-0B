import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { actionRegister } from "./../../actions";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
  }

  errorMessageDisplay = () => {
    if (this.state.flag) {
      setTimeout(() => {
        this.setState({ flag: false });
      }, 3000);

      return (
        <div className="col">
          <div className="alert alert-danger text-center">
            Password Don't Match
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  onCreateAccountClick = () => {
    const firstName = this.refs.firstName.value,
      lastName = this.refs.lastName.value,
      email = this.refs.email.value,
      gender = this.refs.gender.checked ? "men" : "women",
      password = this.refs.password.value,
      repeatPassword = this.refs.repeatPassword.value;

    if (password !== repeatPassword) return this.setState({ flag: true });
    this.props.actionRegister(firstName, lastName, email, gender, password);
    // console.log({ firstName, lastName, email, gender, password });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row pt-5">
          <div className="col">
            <p>
              <strong>Create Account</strong>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <form className="form-group">
              <label htmlFor="#firstname">Frist Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                ref="firstName"
              />
            </form>

            <form className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                ref="email"
              />
            </form>

            <form className="form-group">
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                className="form-control"
                id="pass"
                ref="password"
              />
            </form>
          </div>

          <div className="col">
            <form className="form-group">
              <label htmlFor="#lastname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                ref="lastName"
              />
            </form>

            <form className="form-group mt-3">
              <div className="my-3">Gender</div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline1"
                  name="customRadioInline1"
                  className="custom-control-input"
                  defaultChecked="men"
                  ref="gender"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customRadioInline1"
                >
                  Men
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline2"
                  name="customRadioInline1"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customRadioInline2"
                >
                  Women
                </label>
              </div>
            </form>

            <form className="form-group mt-4">
              <label htmlFor="repeatpass">Repeat Password</label>
              <input
                type="password"
                className="form-control"
                id="repeatpass"
                ref="repeatPassword"
              />
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Link to="/" className="btn btn-outline-secondary">
              Already Have Account
            </Link>
          </div>
          <div className="col d-flex justify-content-end">
            <button
              className="btn btn-dark"
              onClick={this.onCreateAccountClick}
            >
              Create Account
            </button>
          </div>
        </div>
        <div className="row mt-3">{this.errorMessageDisplay()}</div>
      </div>
    );
  }
}

export default connect(
  null,
  { actionRegister }
)(Register);
