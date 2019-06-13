import React, { Component } from "react";
import { Link } from "react-router-dom";

import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/MenageProduct/manage.css";

class AddProduct extends Component {
  render() {
    return (
      <div className="container">
        <div className="row pt-5">
          <Link to="/manage" className="linkBlack">
            <strong>to List Product</strong>
          </Link>
        </div>
        <div className="row inline ">
          <div className="form">
            <div classname="head">
              <h4>
                <strong>Add Product</strong>
              </h4>
            </div>
          </div>
          <div className="row block ">
            <form>
              <div className="form-group row">
                <label htmlFor="#sku" className="col-sm-1 col-form-label">
                  SKU
                </label>
                <div className="col-sm-5">
                  <input type="number" className="form-control" id="sku" />
                </div>

                <label htmlFor="#pname" className="col-sm-2 col-form-label">
                  Product Name
                </label>
                <div className="col-sm-4">
                  <input type="text" className="form-control" id="pname" />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="#size" className="col-sm-1 col-form-label">
                  Size
                </label>
                <div className="col-sm-5">
                  <input type="number" className="form-control" id="size" />
                </div>
                <label htmlFor="#color" className="col-sm-1 col-form-label">
                  Color
                </label>
                <div className="col-sm-5">
                  <input type="text" className="form-control" id="color" />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="#category" className="col-sm-1 col-form-label">
                  Category
                </label>
                <div className="col-sm-3">
                  <select className="custom-select" id="category">
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                  </select>
                </div>

                <label htmlFor="#price" className="col-sm-2 col-form-label">
                  Unit Price
                </label>
                <div className="col-sm-3">
                  <input type="number" className="form-control" id="price" />
                </div>

                <label htmlFor="#stock" className="col-sm-1 col-form-label">
                  Stock
                </label>
                <div className="col-sm-2">
                  <input type="number" className="form-control" id="stock" />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm">
                  <div className="pict">
                    <img
                      src="https://www.zimbabwesituation.com/wp-content/themes/magone/assets/images/xdefault-thumbnail.png.pagespeed.ic.lnoMmrWq-X.png"
                      alt="pict front"
                    />
                  </div>
                  <input type="file" className="form-control" id="price" />
                </div>

                <div className="col-sm">
                  <div className="pict">
                    <img
                      src="https://www.glensfallskarate.com/wp-content/uploads/2017/04/default-image.jpg"
                      alt="pict front"
                    />
                  </div>
                  <input type="file" className="form-control" id="price" />
                </div>

                <div className="col-sm">
                  <div className="pict">
                    <img
                      src="https://www.glensfallskarate.com/wp-content/uploads/2017/04/default-image.jpg"
                      alt="pict front"
                    />
                  </div>
                  <input type="file" className="form-control" id="stock" />
                </div>
              </div>
            </form>
            <div className="row justify-content-end">
              <div className="col-sm-4 py-4">
                <button className="btn btn-dark">
                  <strong>Add</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;
