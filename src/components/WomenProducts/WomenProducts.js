import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "./../../config/axios";

import { CSSTransitionGroup } from "react-transition-group";

import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/WomenProducts/WomenProductcss.css";

class WomenProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  productsDisplayMap = () => {
    // console.log(this.state.products);
    return this.state.products.map(product => {
      return (
        <div className="col-md-4 px-1" key={product.sku}>
          <Link to={`/productdetail/${product.sku}`}>
            <img
              src={`http://localhost:8080/picture/${product.img}`}
              alt="shoes men"
              className="imgClass"
            />
          </Link>
          <p className="mb-0">{product.productName}</p>
          <p>{product.unitPrice}</p>
        </div>
      );
    });
  };

  componentDidMount() {
    axios.get("/product/picture?category=women").then(res => {
      this.setState({ products: res.data });
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row pt-5 mx-3">
          <p>
            <strong>Women Collection</strong>
          </p>
        </div>
        <CSSTransitionGroup
          transitionName="ex"
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={3000}
          className="row pb-5"
        >
          {this.productsDisplayMap()}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default WomenProducts;
