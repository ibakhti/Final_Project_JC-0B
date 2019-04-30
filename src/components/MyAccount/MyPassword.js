import React, { Component } from "react";
import { Link } from "react-router-dom";

class MyPassword extends Component {
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
                  type="text"
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
                  type="text"
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
              <button className="btn btn-dark">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPassword;
