import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "./../../config/axios";

import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/Search/search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: false,
      color: false,
      category: false,
      price: false,
      size: false,
      data: []
    };
  }

  searchInput = () => {
    if (this.state.name) {
      return (
        <div className="row py-5">
          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#name">Search By Name</label>
              <input
                type="text"
                className=" form-control bor"
                id="name"
                ref="name"
              />
            </form>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.getData("name");
              }}
            >
              <strong>Search</strong>
            </button>
          </div>
        </div>
      );
    } else if (this.state.color) {
      return (
        <div className="row py-5">
          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#color">Search By Color</label>
              <input
                type="text"
                className=" form-control bor"
                id="color"
                ref="color"
              />
            </form>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.getData("color");
              }}
            >
              <strong>Search</strong>
            </button>
          </div>
        </div>
      );
    } else if (this.state.category) {
      return (
        <div className="row py-5">
          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#category">Search By Category</label>
              <input
                type="text"
                className=" form-control bor"
                id="category"
                ref="category"
              />
            </form>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.getData("category");
              }}
            >
              <strong>Search</strong>
            </button>
          </div>
        </div>
      );
    } else if (this.state.price) {
      return (
        <div className="row py-5">
          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#min">Min</label>
              <input
                type="text"
                className=" form-control bor"
                id="min"
                ref="min"
              />
            </form>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.getData("price");
              }}
            >
              <strong>Search</strong>
            </button>
          </div>

          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#max">Max</label>
              <input
                type="text"
                className=" form-control bor"
                id="max"
                ref="max"
              />
            </form>
          </div>
        </div>
      );
    } else if (this.state.size) {
      return (
        <div className="row py-5">
          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#size">Search By Size</label>
              <input
                type="text"
                className=" form-control bor"
                id="size"
                ref="size"
              />
            </form>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.getData("size");
              }}
            >
              <strong>Search</strong>
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  click = n => {
    if (n === "name") {
      this.setState({
        name: true,
        color: false,
        category: false,
        price: false,
        size: false
      });
    } else if (n === "color") {
      this.setState({
        name: false,
        color: true,
        category: false,
        price: false,
        size: false
      });
    } else if (n === "category") {
      this.setState({
        name: false,
        color: false,
        category: true,
        price: false,
        size: false
      });
    } else if (n === "price") {
      this.setState({
        name: false,
        color: false,
        category: false,
        price: true,
        size: false
      });
    } else if (n === "size") {
      this.setState({
        name: false,
        color: false,
        category: false,
        price: false,
        size: true
      });
    }
  };

  getData = n => {
    if (n === "name") {
      const name = this.refs.name.value;
      axios.get(`/search/productName?name=${name}`).then(res => {
        this.setState({ data: res.data });
        this.refs.name.value = "";
      });
    } else if (n === "color") {
      const color = this.refs.color.value;
      axios.get(`/search/color?color=${color}`).then(res => {
        this.setState({ data: res.data });
        this.refs.color.value = "";
      });
    } else if (n === "category") {
      const category = this.refs.category.value;
      axios.get(`/search/category?category=${category}`).then(res => {
        this.setState({ data: res.data });
        this.refs.category.value = "";
      });
    } else if (n === "price") {
      const min = parseInt(this.refs.min.value);
      const max = parseInt(this.refs.max.value);
      axios.get(`/search/price?min=${min}&&max=${max}`).then(res => {
        this.setState({ data: res.data });
        this.refs.min.value = "";
        this.refs.max.value = "";
      });
    } else if (n === "size") {
      const size = parseInt(this.refs.size.value);
      axios.get(`/search/size?size=${size}`).then(res => {
        this.setState({ data: res.data });
        this.refs.size.value = "";
      });
    }
  };

  productsDisplayMap = () => {
    // console.log(this.state.products);
    return this.state.data.map(product => {
      return (
        <div className="col-md-4 px-1" key={product.sku}>
          <Link to={"/productdetail/" + product.sku}>
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

  render() {
    return (
      <div className="container">
        <div className="row pt-5 r">
          <div className="col-md">
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                this.click("name");
              }}
            >
              Search By Name
            </button>
          </div>
          <div className="col-md">
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                this.click("color");
              }}
            >
              Search By Color
            </button>
          </div>
          <div className="col-md">
            <button
              className="btn btn-outline-warning"
              onClick={() => {
                this.click("category");
              }}
            >
              Search By Category
            </button>
          </div>
          <div className="col-md">
            <button
              className="btn btn-outline-success"
              onClick={() => {
                this.click("price");
              }}
            >
              Search By Price
            </button>
          </div>
          <div className="col-md">
            <button
              className="btn btn-outline-dark"
              onClick={() => {
                this.click("size");
              }}
            >
              Search By Size
            </button>
          </div>
        </div>
        {this.searchInput()}
        <div className="row pb-5">{this.productsDisplayMap()}</div>
      </div>
    );
  }
}

export default Search;
