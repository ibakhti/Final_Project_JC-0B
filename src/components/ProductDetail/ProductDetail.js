import React, { Component } from "react";
import "./ProductDetail.css";
import axios from "./../../config/axios";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDisplay: [],
      displayName: "",
      displayPrice: "",
      url1: ``,
      url2: ``
    };
  }

  sizeStocktmap = () => {
    return this.state.dataDisplay.map((data, i) => {
      return (
        <option key={i}>{`size ${data.unitSize}  ||   ${
          data.unitStock
        } left`}</option>
      );
    });
  };

  componentDidMount() {
    axios
      .get(`/product/detail?sku=${this.props.match.params.sku}`)
      .then(res => {
        this.setState({
          dataDisplay: res.data[1],
          displayName: res.data[1][0].productName,
          displayPrice: res.data[1][0].unitPrice,
          url1: `http://localhost:8080/picture/${res.data[0][0].img}`,
          url2: `http://localhost:8080/picture/${res.data[0][1].img}`
        });
        // console.log(res.data[0]);
      });
  }

  componentDidUpdate() {
    console.log(this.state.dataDisplay);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row pt-5">
            <div className="col-md">
              <img
                src={this.state.url1}
                alt="shoes"
                className="img-thumbnail my-5 images"
              />
              <img
                src={this.state.url2}
                alt="shoes"
                className="img-thumbnail my-5 images moveout"
              />
              <img
                src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
                alt="shoes"
                className="img-thumbnail my-5 images moveout70"
              />
            </div>

            <div className="col-md">
              <div className="row justify-content-center pt-5">
                <div className="col-md-7">
                  <h2>{this.state.displayName}</h2>
                  <p className="pb-5 pt-3">
                    <strong>{this.state.displayPrice}</strong>
                  </p>
                  <form>
                    <div className="form-group">
                      <select className="form-control select-style">
                        {this.sizeStocktmap()}
                      </select>
                    </div>
                  </form>
                  <button className="btn btn-dark btncustome">
                    <strong>Add To Cart</strong>
                  </button>
                  <ul className="ulcustom">
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
