import React, { Component } from "react";

import axios from "./../../config/axios";

class MyAddress extends Component {
  submitAddress = () => {
    const address = this.refs.address.value,
      city = this.refs.city.value,
      state = this.refs.state.value,
      zip = this.refs.zip.value,
      phoneNumber = this.refs.phoneNumber.value;

    // console.log({ userId, address, city, state, zip, phoneNumber });

    axios
      .put(`/users/address/update/${this.props.userId}`, {
        address,
        city,
        state,
        zip,
        phoneNumber
      })
      .then(res => {
        if (res.data.changedRows) {
          this.props.fnSuccess();
        }
      });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#firstname">Address</label>
              <input
                type="text"
                className="form-control"
                ref="address"
                defaultValue={this.props.user.address}
              />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#firstname">city</label>
              <input
                type="text"
                className="form-control"
                ref="city"
                defaultValue={this.props.user.city}
              />
            </form>
          </div>

          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#firstname">state</label>
              <input
                type="text"
                className="form-control"
                ref="state"
                defaultValue={this.props.user.state}
              />
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#firstname">zip</label>
              <input
                type="text"
                className="form-control"
                ref="zip"
                defaultValue={this.props.user.zip}
              />
            </form>
          </div>

          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#firstname">phone number</label>
              <input
                type="text"
                className="form-control"
                ref="phoneNumber"
                defaultValue={this.props.user.phoneNumber}
              />
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

export default MyAddress;
