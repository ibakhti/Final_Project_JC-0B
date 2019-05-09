import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import axios from "./../../config/axios";

class MyPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      success: false
    };
  }

  submitNewPassword = () => {
    const password = this.refs.password.value;
    const repeatPassword = this.refs.repeatPassword.value;

    if (password !== repeatPassword) {
      this.setState({ flag: true });
    }

    if (password !== "") {
      axios
        .put(`/users/pass/${this.props.userId}`, {
          password
        })
        .then(res => {
          if (res.data.changedRows) {
            this.setState({ success: true });
          } else {
            console.log(res.data);
          }
        });
    }
  };

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

  succsessMessageDisplay = () => {
    if (this.state.success) {
      setTimeout(() => {
        window.location.pathname = "/myaccount";
      }, 2000);

      return (
        <div className="col">
          <div className="alert alert-success text-center">Password Saved</div>
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6 offset-3">
              <p>
                <strong>My New Password</strong>
              </p>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-md-6 offset-3">
              <form className="form-group">
                <label htmlFor="#firstname">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  ref="password"
                />
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 border-dark offset-3">
              <form className="form-group">
                <label htmlFor="#firstname">Repeat Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="repeatPassword"
                  ref="repeatPassword"
                />
              </form>
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-between col-md-6 offset-3">
              <Link to="/myaccount" className="text-dark">
                <strong>Back to My Account</strong>
              </Link>
              <button className="btn btn-dark" onClick={this.submitNewPassword}>
                Submit
              </button>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 offset-3">
              {this.errorMessageDisplay()}
              {this.succsessMessageDisplay()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.account.id
  };
};
export default connect(mapStateToProps)(MyPassword);
