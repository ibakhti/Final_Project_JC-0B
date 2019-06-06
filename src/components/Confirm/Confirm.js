import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "./../../config/axios";

import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/Confirm/confirm.css";

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }

  fileUpload = async () => {
    const formData = new FormData();
    var imageFile = this.gambar;

    formData.append("payslip", imageFile.files[0]);
    formData.append("orderId", this.props.orderId);

    try {
      const res = await axios.put("payslip", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      this.setState({ url: res.data.url });
    } catch (error) {
      console.log("uploadError" + error);
    }
  };
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
              src={
                this.props.payments.paymentImg
                  ? `http://localhost:8080/paypict/${
                      this.props.payments.paymentImg
                    }`
                  : null
              }
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
            <p>
              <strong>Please Upload Your Payment Slip</strong>
            </p>
            <img
              alt="slip"
              src={this.state.url}
              className="slipImg mb-3 pb-3"
            />
            <form>
              <div className="form-group">
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                  ref={input => {
                    this.gambar = input;
                  }}
                />
              </div>
            </form>
            <div className="d-flex justify-content-end mt-3 ">
              <button className="btn btn-dark upbtn" onClick={this.fileUpload}>
                <strong>Upload</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    payments: state.confirm.payment,
    gTotal: state.confirm.total,
    orderId: state.confirm.orderId
  };
};
export default connect(mapStateToProps)(Confirm);
