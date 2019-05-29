import React, { Component } from "react";

import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/Checkout/checkout.css";
class ItemList extends Component {
  itemListDisplay = () => {
    return this.props.data.map(item => {
      return (
        <div className="row border-bottom border-dark">
          <div className="col-md py-1">
            <img
              src={`http://localhost:8080/picture/${item.img}`}
              alt="shoes"
              className="imgc"
            />
          </div>
          <div className="col-md py-1">
            <p className="py-0 my-0">{item.productName}</p>
            <p className="py-0 my-0">{item.size}</p>
            <p className="py-0 my-0">{item.quantity}</p>
          </div>
          <div className="col-md py-1">
            <strong>{item.total}</strong>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="row my-5 mx-3">
          <strong>Checkout</strong>
        </div>
        {this.itemListDisplay()}
        <div className="row justify-content-end ml-5 my-3">
          <div className="col-md pl-5">
            <p>Total:</p>
          </div>
          <div className="col-md pl-5 ml-5">
            <strong className="">{this.props.total}</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemList;
