import React, { Component } from "react";
import { connect } from "react-redux";

import { orderItemList } from "./../../actions/index";

import ItemList from "./ItemList";
import Address from "./Address";
import Shipping from "./Shipping";
import Payment from "./Payment";

class ChekoutMain extends Component {
  componentDidMount() {
    this.props.orderItemList(this.props.userId);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 fixed">
            <ItemList data={this.props.display} total={this.props.total} />
          </div>
          <div className="col-md offset-4">
            <Address />
            <div className="row">
              <div className="col-md">
                <Shipping />
              </div>
              <div className="col-md">
                <Payment />
              </div>
            </div>
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
    total: state.checkout.total
  };
};
export default connect(
  mapStateToProps,
  { orderItemList }
)(ChekoutMain);
