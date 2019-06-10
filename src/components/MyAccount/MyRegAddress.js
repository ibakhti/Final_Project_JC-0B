import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "./../../config/axios";

class MyRegAddress extends Component {
  submitAddress = () => {
    const address = this.refs.address.value,
      city = this.refs.city.value,
      state = this.refs.state.value,
      zip = this.refs.zip.value,
      phoneNumber = this.refs.phoneNumber.value,
      userId = this.props.userId;

    console.log({ userId, address, city, state, zip, phoneNumber });

    axios
      .post("/users/address", {
        userId,
        address,
        city,
        state,
        zip,
        phoneNumber
      })
      .then(res => {
        // console.log(res.data);
        window.location.pathname = "/";
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-5 pt-5 pl-3">
          <p>
            <strong>Please Add Your Address </strong>
          </p>
        </div>
        <div className="row">
          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#firstname">Address</label>
              <input type="text" className="form-control" ref="address" />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#firstname">city</label>
              <input type="text" className="form-control" ref="city" />
            </form>
          </div>

          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#firstname">state</label>
              <input type="text" className="form-control" ref="state" />
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#firstname">zip</label>
              <input type="text" className="form-control" ref="zip" />
            </form>
          </div>

          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#firstname">phone number</label>
              <input type="text" className="form-control" ref="phoneNumber" />
            </form>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col d-flex justify-content-end">
            <button className="btn btn-dark" onClick={this.submitAddress}>
              Submit
            </button>
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
export default connect(mapStateToProps)(MyRegAddress);
