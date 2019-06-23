import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../config/axios";

import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/OrderAdmin/ordeAdmin.css";
import SnackBar from "./../MenageProduct/SnackBar";

class OrderAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      open: false,
      message: ""
    };
  }

  getdata = () => {
    axios.get("/admin/order/fulfill").then(res => {
      this.setState({ data: res.data });
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  sendInvoice = (orderId, userId) => {
    axios
      .put("/invoice", {
        orderId,
        userId
      })
      .then(res => {
        if (res.data) {
          this.setState({ message: "Invoice Send", open: true });
        }
      });
  };

  orderDisplay = () => {
    return this.state.data.map((it, i) => {
      return (
        <tr key={i}>
          <th scope="row">
            <Link to={`/detail/${it.orderId}`}>{it.orderId}</Link>
          </th>
          <td>
            <Link to={`/userprofile/${it.userId}`}>{it.userId}</Link>
          </td>
          <td>{it.shippingName}</td>
          <td>{it.duration}</td>
          <td>{it.paid}</td>
          <td>{it.orderDate.split("T")[0]}</td>
          <td>{it.paymentName}</td>
          <td>{it.paymentCategory}</td>
          <td>{it.rekNum}</td>
          <td>{it.paymentDate ? it.paymentDate.split("T")[0] : "null"}</td>
          <td>
            <a
              href={`http://localhost:8080/payslip/picture/${it.transferImg}`}
              alt="payment slip"
              target="_blank"
              rel="noopener noreferrer"
            >
              transfer Img
            </a>
          </td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.sendInvoice(it.orderId, it.userId);
              }}
            >
              Send Invoice
            </button>
          </td>
        </tr>
      );
    });
  };

  componentDidMount = () => {
    this.getdata();
  };

  render() {
    return (
      <div className="container py-5">
        <div className="row mb-2">
          <Link to="/order" className="linkBlack">
            <strong>to Order</strong>
          </Link>
        </div>
        <div className="row pb-5">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Order Id</th>
                <th scope="col">User Id</th>
                <th scope="col">Shipping Name</th>
                <th scope="col">Duration</th>
                <th scope="col">Paid</th>
                <th scope="col">Order Date</th>
                <th scope="col">Payment Name</th>
                <th scope="col">Category</th>
                <th scope="col">Rek num</th>
                <th scope="col">Payment Date</th>
                <th scope="col">Transfer Slip</th>
                <th scope="col">Invoice</th>
              </tr>
            </thead>
            <tbody>{this.orderDisplay()}</tbody>
          </table>
        </div>
        <SnackBar
          open={this.state.open}
          handleClose={this.handleClose}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default OrderAdmin;
