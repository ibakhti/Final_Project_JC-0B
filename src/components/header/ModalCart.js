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

              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md">
                      <img
                        src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?cs=srgb&dl=brand-design-fashion-1598508.jpg&fm=jpg"
                        alt="shoes"
                        className="imgCart"
                      />
                    </div>
                    <div className="col-md">
                      <p>Lorem ipsum</p>
                      <p>price</p>
                      <p>Quantity</p>
                      <button className="btn btn-dark">remove</button>
                    </div>
                  </div>
                </div>
              </div>

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
