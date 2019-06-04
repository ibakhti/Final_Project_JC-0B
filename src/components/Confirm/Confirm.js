import React, { Component } from "react";
import { connect } from "react-redux";

import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/Confirm/confirm.css";

class Confirm extends Component {
  componentDidMount() {
    console.log(this.props.payments);
  }
  componentDidUpdate() {
    console.log(this.props.payments);
  }
  render() {
    return (
      <div className="container">
        <div className="row py-5">
          <div className="col-md">
            <p>
              <strong>Thank You Shopping With Us</strong>
            </p>
            <p>You Must Proceed Payment To This Account Number:</p>
            <img
              className="rounded cusImg"
              alt="bank"
              src={`http://localhost:8080/paypict/${
                this.props.payments.paymentImg
              }`}
            />
            <p className="mt-2 mb-0 py-0">
              {this.props.payments.paymentName} a.n PT. Budi Cahaya Jaya
            </p>
            <p>{this.props.payments.noRek}</p>
            <p className="my-3">
              <strong>Total: {this.props.gTotal} </strong>
            </p>
          </div>
          <div className="col-md">
            <h1>UPLOAD BIL TRANS</h1>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    payments: state.confirm.payment,
    gTotal: state.confirm.total
  };
};
export default connect(mapStateToProps)(Confirm);
