import React, { Component } from "react";
import { connect } from "react-redux";

import {
  orderItemList,
  shippingListAction,
  shippersListAction,
  shippingPriceAction
} from "./../../actions/index";

import ItemList from "./ItemList";
import Address from "./Address";
import Sp from "./Sp";

class ChekoutMain extends Component {
  componentDidMount() {
    this.props.orderItemList(this.props.userId);
    this.props.shippingListAction();
    this.props.shippersListAction();
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
            <Address />
            <Sp
              shipping={this.props.shipping}
              shippers={this.props.shippers}
              shAction={this.props.shippingPriceAction}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.account.id,
    display: state.checkout.data,
    total: state.checkout.total,
    shipping: state.checkout.shipping,
    shippers: state.checkout.shippers,
    shippingPrice: state.checkout.price
  };
};
export default connect(
  mapStateToProps,
  { orderItemList, shippingListAction, shippersListAction, shippingPriceAction }
)(ChekoutMain);
