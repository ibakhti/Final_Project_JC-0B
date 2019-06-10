import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import axios from "./../../config/axios";
import {
  confirmPaymentAction,
  confirmTotalAction,
  orderIdAction
} from "./../../actions/index";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      od: [],
      flag: false
    };
  }

  orderDetail = oId => {
    const fil = this.state.od.filter(i => {
      return i.orderId === oId;
    });

    return fil.map(i => {
      return (
        <div className="d-inline-flex mx-3 mt-3">
          <div className="border border-dark rounded px-3 py-2">
            <p className="py-0 my-0">
              <strong>Product: </strong>
              {i.productName}
            </p>
            <p className="py-0 my-0">
              <strong>Size: </strong>
              {i.size}
            </p>
            <p className="py-0 my-0">
              <strong>Price: </strong>
              {i.unitPrice}
            </p>
            <p className="py-0 my-0">
              <strong>Quantity: </strong>
              {i.quantity}
            </p>
          </div>
        </div>
      );
    });
  };

  orderHistory = () => {
    return this.state.order.map(i => {
      const date = i.orderDate.split("T");
      return (
        <div className=" border-top border-dark">
          <div className="row pt-3">
            <p>{date[0]}</p>
          </div>
          {this.orderDetail(i.orderId)}
          <div className="row mt-2 pb-0">
            <p>
              <strong>Shippers: </strong>
              {i.shippingName} {i.duration} <strong> Paid: </strong>
              {i.paid}
            </p>
          </div>
          <div className="row mt-0 py-0">
            <p>
              <strong>
                status: <u>{this.statusPayment(i)}</u>
              </strong>
            </p>
            {this.buttonConfirm(i)}
          </div>
        </div>
      );
    });
  };

  statusPayment = item => {
    if (item.paymentDate && item.fulfill) {
      return "Send";
    } else if (item.paymentDate) {
      return "Waiting Confirmation";
    } else {
      return "Waiting Your Payment";
    }
  };

  goToConfirm = (oId, pId, p) => {
    this.props.orderIdAction(oId);
    this.props.confirmPaymentAction(pId);
    this.props.confirmTotalAction(p);

    this.setState({ flag: true });
  };

  buttonConfirm = item => {
    if (!item.paymentDate && !item.fulfill) {
      return (
        <div className="d-inline-flex mx-3 mb-3">
          <button
            className="btn btn-dark"
            onClick={() => {
              this.goToConfirm(item.orderId, item.paymentId, item.paid);
            }}
          >
            Upload Transfer Slip
          </button>
        </div>
      );
    }
  };

  redirectToConfirm = () => {
    if (this.state.flag) {
      return <Redirect to="/confirm" />;
    } else {
      return null;
    }
  };

  componentDidMount() {
    axios.get(`/order/history?userId=${this.props.userId}`).then(res => {
      // console.log(res.data);
      this.setState({
        order: res.data[0],
        od: res.data[1]
      });
    });
  }
  render() {
    return (
      <div className="container pb-5">
        <div className="row pt-5">
          <strong>Your Order History</strong>
        </div>
        <div>{this.orderHistory()}</div>
        {this.redirectToConfirm()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.account.id
  };
};
export default connect(
  mapStateToProps,
  { confirmPaymentAction, confirmTotalAction, orderIdAction }
)(Order);
