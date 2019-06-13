import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "./../../config/axios";
import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/MenageProduct/manage.css";

class MenageProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  displayTable = () => {
    return this.state.data.map((it, i) => {
      return (
        <tr>
          <th scope="row">{i + 1}</th>
          <td>{it.sku}</td>
          <td>{it.productName}</td>
          <td>{it.category}</td>
          <td>{it.color}</td>
          <td>{it.unitPrice}</td>
        </tr>
      );
    });
  };
  componentDidMount() {
    axios.get("/allproduct").then(res => {
      this.setState({ data: res.data });
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row pt-5 justify-content-between">
          <p>
            <strong>List Product</strong>
          </p>
          <Link to="/addproduct" className="linkBlack">
            <strong>to Add Product</strong>
          </Link>
        </div>
        <div className="row">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">No</th>
                <th scope="col">SKU</th>
                <th scope="col">Product Name</th>
                <th scope="col">Category</th>
                <th scope="col">Color</th>
                <th scope="col">Unit Price</th>
              </tr>
            </thead>
            <tbody>{this.displayTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MenageProduct;
