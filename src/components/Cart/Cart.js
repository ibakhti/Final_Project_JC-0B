import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { actionRemoveCart } from "./../../actions/cartAction";

class Cart extends Component {
  remove = (userId, productId, sku) => {
    this.props.actionRemoveCart(userId, productId, sku);
  };
  displayData = () => {
    return this.props.dataCart.map((data, i) => {
      return (
        <div className="row border-bottom border-dark mb-3 pb-3" key={i}>
          <div className="col-md">
            <Link to={`/productdetail/${data.sku}`}>
              <img
                src={`http://localhost:8080/picture/${data.img}`}
                alt="shoes"
                className="imgCart"
              />
            </Link>
          </div>
          <div className="col-md">
            <p className="px-0 mb-0">{data.productName}</p>
            <p className="px-0 mb-0">{data.unitPrice}</p>
            <p className="px-0 mb-0">{`size: ${data.size}`}</p>
            <p className="px-0 mt-0">{`quantity: ${data.quantity}`}</p>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.remove(data.userId, data.productId, data.sku);
              }}
            >
              remove
            </button>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row pt-5 pb-3">
          <strong>Edit Cart</strong>
        </div>
        {this.displayData()}
        <div className="row my-2 justify-content-between">
          <div>
            <p style={{ fontSize: "8" }}>
              *Click the image to add more product
            </p>
          </div>
          <Link to="/checkout" style={{ color: "black" }}>
            <strong>got to Checkout</strong>
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    dataCart: state.cartData.cart
  };
};
export default connect(
  mapStateToProps,
  { actionRemoveCart }
)(Cart);
