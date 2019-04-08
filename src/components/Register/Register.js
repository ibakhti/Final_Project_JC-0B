import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
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
              <input type="text" className="form-control" id="firstname" />
            </form>

            <form className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="firstname" />
            </form>

            <form className="form-group">
              <label htmlFor="pass">Password</label>
              <input type="password" className="form-control" id="pass" />
            </form>
          </div>

          <div className="col">
            <form className="form-group">
              <label htmlFor="#lastname">Last Name</label>
              <input type="text" className="form-control" id="lastname" />
            </form>

            <form className="form-group mt-3">
              <div className="my-3">Gender</div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline1"
                  name="customRadioInline1"
                  className="custom-control-input"
                  defaultValue="men"
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
                  defaultValue="women"
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
              <input type="password" className="form-control" id="repeatpass" />
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
            <button className="btn btn-dark">Create Account</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
