import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { actionRegister, actionRegisterError } from "./../../actions";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  errorMessageDisplay = () => {
    if (this.state.message) {
      setTimeout(() => {
        this.setState({ message: "" });
      }, 3000);

      return (
        <div className="col">
          <div className="alert alert-danger text-center">
            {this.state.message}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  errorRegisterDiplay = () => {
    if (this.props.errorRegister) {
      setTimeout(() => {
        this.props.actionRegisterError();
      }, 5000);
      return (
        <div className="col">
          <div className="alert alert-danger text-center">
            {this.props.errorRegister}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  onCreateAccountClick = () => {
    const userName = this.refs.userName.value,
      firstName = this.refs.firstName.value,
      lastName = this.refs.lastName.value,
      email = this.refs.email.value,
      gender = this.refs.gender.checked ? "men" : "women",
      password = this.refs.password.value,
      repeatPassword = this.refs.repeatPassword.value;
    if (
      userName === "" ||
      firstName === "" ||
      lastName === "" ||
      email === ""
    ) {
      this.setState({ message: "Please Fill All Column" });
    } else if (
      parseInt(userName) ||
      parseInt(firstName) ||
      parseInt(lastName)
    ) {
      this.setState({
        message: "Username, FirstName, or Lastname Must Be Latter"
      });
    } else if (
      firstName.match(
        /[[|\]|`|~|\\|||*|$|%|#|@|?|>|<|/|!|+|-|^|&|*|(|)|{|}|]/
      ) ||
      lastName.match(/[[|\]|`|~|\\|||*|$|%|#|@|?|>|<|/|!|+|-|^|&|*|(|)|{|}|]/)
    ) {
      this.setState({
        message: "First name. Last Name Must Not Contain Any Special Character"
      });
    } else if (password !== repeatPassword) {
      this.setState({ message: "password doesn't match" });
    } else {
      this.props.actionRegister(
        userName,
        firstName,
        lastName,
        email,
        gender,
        password
      );
      this.setState({ message: "oke" });
    }

    // console.log({ userName, firstName, lastName, email, gender, password });
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
          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#firstname">User Name</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                ref="userName"
              />
            </form>
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
        <div className="row mt-3">{this.errorRegisterDiplay()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorRegister: state.account.error
  };
};

export default connect(
  mapStateToProps,
  { actionRegister, actionRegisterError }
)(Register);
