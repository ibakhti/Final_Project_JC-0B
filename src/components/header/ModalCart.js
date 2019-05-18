import React, { Component } from "react";

import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/header/modalCart.css";

class Modal extends Component {
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
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-dark btnCheckout">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
