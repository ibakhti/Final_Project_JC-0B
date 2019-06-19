import React, { Component } from "react";
import axios from "../../config/axios";

class SentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getData = () => {
    axios.get(`/admin/detail?orderId=${this.props.orderId}`).then(res => {
      this.setState({ data: res.data });
    });
  };

  displayData = () => {
    return this.state.data.map((it, i) => {
      return (
        <tr key={i}>
          <th scope="row">{it.orderId}</th>
          <td>{it.productId}</td>
          <td>{it.sku}</td>
          <td>{it.productName}</td>
          <td>{it.size}</td>
          <td>{it.unitPrice}</td>
          <td>{it.quantity}</td>
        </tr>
      );
    });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        <div className="row">
          <p>
            <strong>Order Detail</strong>
          </p>
        </div>
        <div className="row pb-5">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Order Id</th>
                <th scope="col">Product Id</th>
                <th scope="col">Sku</th>
                <th scope="col">Product Name</th>
                <th scope="col">Size</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>{this.displayData()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SentDetail;
