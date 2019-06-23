import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import axios from "./../../config/axios";

class MyAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      done: false,
      error: ""
    };
  }

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
      this.setState({ error: "Please Fill All Column" });
    } else if (parseInt(address) || parseInt(city) || parseInt(state)) {
      this.setState({ error: "Address, City, or State Must Be Latter" });
    } else if (!parseInt(phoneNumber)) {
      this.setState({ error: "Phone Number Must Number" });
    } else if (
      address.match(/[[|\]|`|~|\\|||*|$|%|#|@|?|>|<|/|!|+|-|^|&|*|(|)|{|}|]/) ||
      city.match(/[[|\]|`|~|\\|||*|$|%|#|@|?|>|<|/|!|+|-|^|&|*|(|)|{|}|]/) ||
      state.match(/[[|\]|`|~|\\|||*|$|%|#|@|?|>|<|/|!|+|-|^|&|*|(|)|{|}|]/) ||
      zip.match(/[[|\]|`|~|\\|||*|$|%|#|@|?|>|<|/|!|+|-|^|&|*|(|)|{|}|]/) ||
      phoneNumber.match(
        /[[|\]|`|~|\\|||*|$|%|#|@|?|>|<|/|!|+|-|^|&|*|(|)|{|}|]/
      )
    ) {
      this.setState({
        error:
          "Address, City, State, Zip, Phone Number Must Not Contain Any Special Character"
      });
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
            this.setState({ done: true });
          }
        });
    }
  };

  errorMessegeDisplay = () => {
    if (this.state.error) {
      setTimeout(() => {
        this.setState({ error: "" });
      }, 5000);

      return (
        <div className="col">
          <div className="alert alert-danger text-center">
            {this.state.error}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  componentDidMount() {
    axios.get(`/users/address?userId=${this.props.userId}`).then(res => {
      if (res.status === 200) {
        this.setState({ data: res.data[0] });
      }
    });
  }

  render() {
    if (!this.state.done) {
      return (
        <div className="container">
          <div className="row py-5">
            <strong>Changed Your Address</strong>
          </div>
          <div className="row">
            <div className="col-md">
              <form className="form-group">
                <label htmlFor="#firstname">Address</label>
                <input
                  type="text"
                  className="form-control"
                  ref="address"
                  defaultValue={this.state.data.address}
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
                  defaultValue={this.state.data.city}
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
                  defaultValue={this.state.data.state}
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
                  defaultValue={this.state.data.zip}
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
                  defaultValue={this.state.data.phoneNumber}
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
          {this.errorMessegeDisplay()}
        </div>
      );
    } else {
      return (
        <div>
          <Redirect to="/checkout" />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    userId: state.account.id
  };
};

export default connect(mapStateToProps)(MyAddress);
