import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "./../../config/axios";
import LazyLoad from "react-lazy-load";

import ImageLoader from "./../../playground/ImageLoader";
import Carousel from "./Carousel";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      popul: []
    };
  }

  componentDidMount() {
    axios.get("/product/new").then(res1 => {
      axios.get("/product/popular").then(res => {
        this.setState({ data: res1.data, popul: res.data });
      });
    });
  }

  displayNewProduct = () => {
    return this.state.data.map((it, i) => {
      return (
        <div className="col-md-4" key={i}>
          <LazyLoad debounce={false} offsetVertical={0}>
            <Link to={"/productdetail/" + it.sku}>
              <ImageLoader
                src={`http://localhost:8080/picture/${it.img}`}
                alt="shoes"
                className="img-thumbnail"
              />
            </Link>
          </LazyLoad>
          <p className="mb-0">{it.productName}</p>
          <p>{it.unitPrice}</p>
        </div>
      );
    });
  };

  diplayPopuler = () => {
    return this.state.popul.map((it, i) => {
      return (
        <div className="col-md" key={i}>
          <Link to={"/productdetail/" + it.sku}>
            <LazyLoad>
              <ImageLoader
                src={`http://localhost:8080/picture/${it.img}`}
                alt="shoes"
                className="img-thumbnail"
              />
            </LazyLoad>
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        {/* content */}

        <div>
          <Carousel />
        </div>
        <div className="container mb-5">
          <div className="row pt-5">
            <p>
              <strong>Our New Collection</strong>
            </p>
          </div>

          {/* New Arrivel content */}
          <div className="row">{this.displayNewProduct()}</div>
        </div>

        {/* Category */}
        <div className="container-fluid my-5">
          <div className="row pt-5 mx-5">
            <p>
              <strong>Our Premium Collection</strong>
            </p>
          </div>
          <div className="row">{this.diplayPopuler()}</div>
        </div>
      </div>
    );
  }
}

export default Home;
