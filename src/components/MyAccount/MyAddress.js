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

    if (
      address === "" ||
      city === "" ||
      state === "" ||
      zip === "" ||
      phoneNumber === ""
    ) {
      this.props.error("Please Fill All Column");
    } else if (parseInt(address) || parseInt(city) || parseInt(state)) {
      this.props.error("Address, City, or State Must Be Latter");
    } else if (!parseInt(phoneNumber)) {
      this.props.error("Phone Number Must Number");
    } else if (
      address.match(
        /[[|\]|`|~|\\|||*|$|%|#|@|?|>|<|/|!|+|\-|_|=|^|&|*|(|)|{|}|]/
      ) ||
      city.match(
        /[[|\]|`|~|\\|||*|$|%|#|@|?|>|<|/|!|+|\-|_|=|^|&|*|(|)|{|}|]/
      ) ||
      state.match(
        /[[|\]|`|~|\\|||*|$|%|#|@|?|>|<|/|!|+|\-|_|=|^|&|*|(|)|{|}|]/
      ) ||
      zip.match(
        /[[|\]|`|~|\\|||*|$|%|#|@|?|>|<|/|!|+|\-|_|=|^|&|*|(|)|{|}|]/
      ) ||
      phoneNumber.match(
        /[[|\]|`|~|\\|||*|$|%|#|@|?|>|<|/|!|+|\-|_|=|^|&|*|(|)|{|}|]/
      )
    ) {
      this.props.error(
        "Address, City, State, Zip, Phone Number Must Not Contain Any Special Character"
      );
    } else {
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
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md offset-md-3 mr-5">
            <form className="form-group">
              <label htmlFor="#firstname">Address</label>
              <input
                type="text"
                className="form-control"
                ref="address"
                defaultValue={this.props.user.address || ""}
              />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md offset-md-3">
            <form className="form-group">
              <label htmlFor="#firstname">city</label>
              <input
                type="text"
                className="form-control"
                ref="city"
                defaultValue={this.props.user.city || ""}
              />
            </form>
          </div>

          <div className="col-md mr-5">
            <form className="form-group">
              <label htmlFor="#firstname">state</label>
              <input
                type="text"
                className="form-control"
                ref="state"
                defaultValue={this.props.user.state || ""}
              />
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-md offset-md-3">
            <form className="form-group">
              <label htmlFor="#firstname">zip</label>
              <input
                type="text"
                className="form-control"
                ref="zip"
                defaultValue={this.props.user.zip || ""}
              />
            </form>
          </div>

          <div className="col-md mr-5">
            <form className="form-group">
              <label htmlFor="#firstname">phone number</label>
              <input
                type="text"
                className="form-control"
                ref="phoneNumber"
                defaultValue={this.props.user.phoneNumber || ""}
              />
            </form>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col d-flex justify-content-end mr-5">
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
