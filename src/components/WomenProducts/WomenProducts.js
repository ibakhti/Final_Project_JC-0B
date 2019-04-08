import React, { Component } from "react";
import axios from "axios";

class WomenProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  productsDisplayMap = () => {
    console.log(this.state.products);
    return this.state.products.map(product => {
      return (
        <div className="col-md-4" key={product.id}>
          <img
            src={product.srcPict}
            alt="shoes men"
            className="img-thumbnail"
          />
          <p className="mb-0">lorem ipsum</p>
          <p>Rp.xxxxx</p>
        </div>
      );
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/products", {
        params: {
          category: "women"
        }
      })
      .then(res => {
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
        <div className="row pb-5">{this.productsDisplayMap()}</div>
      </div>
    );
  }
}

export default WomenProducts;
