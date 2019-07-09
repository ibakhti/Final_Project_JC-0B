import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "../../config/axios";
import DialogDeny from "./DialogDeny";

import { orderCountAction } from "./../../actions/index";

import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/OrderAdmin/ordeAdmin.css";

class OrderAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      orderId: "",
      open: false,
      remove: false
    };
  }

  getdata = () => {
    axios.get("/admin/order").then(res => {
      this.setState({ data: res.data });
    });
  };

  deny = () => {
    if (this.state.remove) {
      axios
        .delete(`/admin/order/delete`, {
          data: { orderId: this.state.orderId }
        })
        .then(res => {
          this.getdata();
          this.props.orderCountAction();
          this.setState({ open: false });
        });
    } else {
      axios
        .delete(`/admin/deny`, { data: { orderId: this.state.orderId } })
        .then(res => {
          this.getdata();
          this.setState({ open: false });
        });
    }
  };

  openDialog = (oid, remove) => {
    this.setState({ open: true, orderId: oid, remove: remove });
  };

  orderDisplay = () => {
    return this.state.data.map((it, i) => {
      return (
        <tr key={i}>
          <td>
            <Link to={`/detail/${it.orderId}`}>{it.orderId}</Link>
          </td>
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
            {it.transferImg ? (
              <a
                href={`http://localhost:8080/payslip/picture/${it.transferImg}`}
                alt="payment slip"
                target="_blank"
                rel="noopener noreferrer"
              >
                transfer Img
              </a>
            ) : (
              "not upload"
            )}
          </td>
          <td>{this.button(it.transferImg, it.orderId, it.userId)}</td>
        </tr>
      );
    });
  };

  button = (t, o, u) => {
    if (t) {
      return (
        <div>
          <Link to={`sent/${o}/${u}`} className="btn btn-success mr-1">
            Accept
          </Link>
          <button
            className="btn btn-warning ml-1"
            onClick={() => {
              this.openDialog(o, false);
            }}
          >
            Deny
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.openDialog(o, true);
            }}
          >
            Remove
          </button>
        </div>
      );
    }
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount = () => {
    this.getdata();
  };

  render() {
    return (
      <div className="container py-5">
        <div className="row justify-content-between">
          <p>
            <strong>List Of Order</strong>
          </p>
          <Link to="/completed" className="linkBlack">
            <strong> to Completed Order</strong>
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
                <th scope="col">...</th>
              </tr>
            </thead>
            <tbody>{this.orderDisplay()}</tbody>
          </table>
        </div>
        <DialogDeny
          open={this.state.open}
          handleClose={this.handleClose}
          deny={this.deny}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { orderCountAction }
)(OrderAdmin);
