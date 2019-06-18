import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import AddressUser from "./../OrderAdmin/AddressUser";
import SentDetail from "./../OrderAdmin/SentDetail";
import axios from "../../config/axios";
class Sent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
  }

  SendProduct = orderId => {
    axios
      .put("/admin/sent", {
        orderId
      })
      .then(res => {
        if (res.data.affectedRows) {
          this.setState({ flag: true });
        }
      });
  };

  redirectToOrder = () => {
    if (this.state.flag) {
      return <Redirect to="/order" />;
    } else {
      return null;
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row pt-5">
          <div>
            <Link to="/order" className="linkBlack">
              <strong>to Order</strong>
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <h4>
            <strong>Sent Product</strong>
          </h4>
        </div>
        <div className="row mb-3">
          <AddressUser userId={this.props.match.params.userId} />
        </div>
        <SentDetail orderId={this.props.match.params.orderId} />
        <div className="row mb-5 justify-content-end">
          <button
            className="btn btn-primary btnfit"
            onClick={() => {
              this.SendProduct(this.props.match.params.orderId);
            }}
          >
            <strong>Send</strong>
          </button>
        </div>
        {this.redirectToOrder()}
      </div>
    );
  }
}

export default Sent;
