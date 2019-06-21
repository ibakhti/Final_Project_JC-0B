import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { orderCountAction } from "./../../actions/index";

import AddressUser from "./../OrderAdmin/AddressUser";
import SentDetail from "./../OrderAdmin/SentDetail";
import axios from "../../config/axios";
class Sent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      flag: false
    };
  }

  SendProduct = orderId => {
    this.stockAndFulfill(orderId, 0);
    // console.log(this.state.data);
  };

  stockAndFulfill = async (orderId, i) => {
    // console.log([i, this.state.data.length]);
    if (i < this.state.data.length) {
      const res = await axios.put("/order/delete", {
        productId: this.state.data[i].productId
      });
      if (res.data.affectedRows) {
        this.stockAndFulfill(orderId, i + 1);
      }
    } else {
      const res = await axios.put("/admin/sent", {
        orderId
      });
      // console.log(res.data.affectedRows);
      if (res.data.affectedRows) {
        this.props.orderCountAction();
        this.setState({ flag: true });
        return res;
      }
    }
  };

  redirectToOrder = () => {
    if (this.state.flag) {
      return <Redirect to="/order" />;
    } else {
      return null;
    }
  };

  componentDidMount() {
    axios
      .get(`/admin/detail?orderId=${this.props.match.params.orderId}`)
      .then(res => {
        this.setState({ data: res.data });
      });
  }

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

export default connect(
  null,
  { orderCountAction }
)(Sent);
