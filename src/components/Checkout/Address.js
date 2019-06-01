import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "./../../config/axios";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get(`/users/address?userId=${this.props.userId}`).then(res => {
      if (res.status === 200) {
        this.setState({ data: res.data[0] });
      }
    });
  }
  render() {
    return (
      <div className="mt-5">
        <p>
          <strong>Send to {this.props.name}</strong>
        </p>
        <div className="border-bottom border-dark">
          <p className="py-0 my-0">
            <span>
              <strong>Address: </strong>
            </span>
            {this.state.data.address}
          </p>
          <p className="py-0 my-0">
            <span>
              <strong>City: </strong>
            </span>
            {this.state.data.city}
          </p>
          <p className="py-0 my-0">
            <span>
              <strong>State: </strong>
            </span>
            {this.state.data.state}
          </p>
          <p className="py-0 my-0">
            <span>
              <strong>Zip Code: </strong>
            </span>
            {this.state.data.zip}
          </p>
          <p className="py-0 mt-0 mb-3">
            <span>
              <strong>Phone Number: </strong>
            </span>
            {this.state.data.phoneNumber}
          </p>
        </div>
        <div className="d-flex justify-content-end mar">
          <Link to="editaddress">
            <strong className="text-dark">Change Address</strong>
          </Link>
        </div>
      </div>
    );
  }
}

export default Address;
