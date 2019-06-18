import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  orderItemList,
  shippingListAction,
  shippersListAction,
  shippingPriceAction,
  paymentListAction,
  confirmPaymentAction,
  confirmTotalAction,
  orderIdAction,
  deleteAllCartAction
} from "./../../actions/index";
import axios from "./../../config/axios";

import ItemList from "./ItemList";
import Address from "./Address";
import Sp from "./Sp";
import AlertDialog from "./AlertDialog";

class ChekoutMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userId,
      shippingId: null,
      paymentId: null,
      rekNum: null,
      open: false,
      redirect: false
    };
  }

  buyOnclick = () => {
    if (this.state.shippingId && this.state.paymentId && this.state.rekNum) {
      const userId = this.props.userId,
        shippingId = this.state.shippingId,
        paymentId = this.state.paymentId,
        paid = this.props.shippingPrice + this.props.total,
        rekNum = this.state.rekNum;
      console.log("click");
      axios
        .put("/order", {
          userId,
          shippingId,
          paymentId,
          paid,
          rekNum
        })
        .then(res => {
          console.log("orderOke");
          const items = [];
          const orderId = res.data.insertId;
          this.props.display.forEach(el => {
            const {
              productId,
              sku,
              productName,
              size,
              quantity,
              unitPrice
            } = el;
            items.push({
              orderId,
              productId,
              sku,
              productName,
              size,
              quantity,
              unitPrice
            });
          });
          this.props.orderIdAction(orderId);
          axios
            .put("/orderdetail", {
              items
            })
            .then(res => {
              console.log("orderDetail ok");
              this.props.confirmPaymentAction(paymentId);
              this.props.confirmTotalAction(paid);
              this.props.deleteAllCartAction(userId);
              this.setState({ redirect: true });
            });
        })
        .catch(err => console.log("err from axios order" + err));
    } else {
      console.log("else");
      this.setState({ open: true });
    }
  };

  giveDatatoCheckoutMain = (name, dat) => {
    this.setState({ [name]: dat });
  };

  giveReknum = num => {
    this.setState({ rekNum: parseInt(num) });
  };

  closeAlert = () => {
    this.setState({ open: false });
  };

  redirectToConfirm = () => {
    if (this.state.redirect) {
      return <Redirect to="/confirm" />;
    } else {
      return null;
    }
  };

  componentDidMount() {
    this.props.orderItemList(this.props.userId);
    this.props.shippingListAction();
    this.props.shippersListAction();
    this.props.paymentListAction();
  }

  // componentDidUpdate() {
  //   console.log(this.props.shipping);
  // }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 fixed">
            <ItemList
              data={this.props.display}
              total={this.props.total}
              shPrice={this.props.shippingPrice}
            />
          </div>
          <div className="col-md offset-4">
            <Address
              userId={this.props.userId}
              name={`${this.props.fName} ${this.props.lName}`}
            />
            <Sp
              shipping={this.props.shipping}
              shippers={this.props.shippers}
              shAction={this.props.shippingPriceAction}
              shipper={this.props.shipper}
              duration={this.props.duration}
              cdur={this.props.compDur}
              paylist={this.props.paylist}
              trans={this.giveDatatoCheckoutMain}
              rekNum={this.giveReknum}
            />
          </div>
        </div>
        <div className="row buy">
          <div className="col-md-3 offset-9">
            <button className="btn btn-dark btnbuy" onClick={this.buyOnclick}>
              <strong>Buy</strong>
            </button>
          </div>
          <div>
            <AlertDialog open={this.state.open} handleClose={this.closeAlert} />
          </div>
        </div>
        {this.redirectToConfirm()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.account.id,
    fName: state.account.firstName,
    lName: state.account.lastName,
    display: state.checkout.data,
    total: state.checkout.total,
    shipping: state.checkout.shipping,
    shippers: state.checkout.shippers,
    shippingPrice: state.checkout.price,
    shipper: state.checkout.shipper,
    duration: state.checkout.duration,
    compDur: state.checkout.compDur,
    paylist: state.checkout.paylist
  };
};
export default connect(
  mapStateToProps,
  {
    orderItemList,
    shippingListAction,
    shippersListAction,
    shippingPriceAction,
    paymentListAction,
    confirmPaymentAction,
    confirmTotalAction,
    orderIdAction,
    deleteAllCartAction
  }
)(ChekoutMain);
