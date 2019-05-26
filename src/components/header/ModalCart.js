import React, { Component } from "react";
// import axios from "./../../config/axios";

import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/header/modalCart.css";

class Modal extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dataCart: []
  //   };
  // }

  cartDisplayMap = () => {
    if (this.props.dataCart.length) {
      return this.props.dataCart.map((data, i) => {
        return (
          <div className="row" key={i}>
            <div className="col-md">
              <img
                src={`http://localhost:8080/picture/${data.img}`}
                alt="shoes"
                className="imgCart"
              />
            </div>
            <div className="col-md">
              <p className="px-0 mb-0">{data.productName}</p>
              <p className="px-0 mb-0">{data.unitPrice}</p>
              <p className="px-0 mb-0">{`size: ${data.size}`}</p>
              <p className="px-0 mt-0">{`quantity: ${data.quantity}`}</p>
              <button
                className="btn btn-dark"
                onClick={() => {
                  this.props.remove(data.userId, data.productId, data.sku);
                }}
              >
                remove
              </button>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="row justify-content-center">
          <h3>Your Cart is Empty</h3>
        </div>
      );
    }
  };

  buttonCheckout = () => {
    if (this.props.dataCart.length) {
      return (
        <button
          type="button"
          className="btn btn-dark btnCheckout"
          data-dismiss="modal"
        >
          Checkout
        </button>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <div
          className="modal fade trans"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header  bgDark">
                <p className="modal-title whiteText" id="exampleModalLabel">
                  <strong>Your Cart</strong>
                </p>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span className="whiteText" aria-hidden="true">
                    &times;
                  </span>
                </button>
              </div>

              <div className="modal-body">
                <div className="container-fluid" />
                {this.cartDisplayMap()}
              </div>

              <div className="modal-footer">{this.buttonCheckout()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
