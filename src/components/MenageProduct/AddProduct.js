import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "./../../config/axios";
import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/MenageProduct/manage.css";
import SnackBar from "./SnackBar";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      satu: "",
      dua: "",
      tiga: "",
      open: false,
      message: ""
    };
  }

  openSnackBar = txt => {
    this.setState({ open: true, message: txt });
    setInterval(() => {
      this.setState({ open: false });
    }, 5000);
  };

  fileUpload = async (sku, n) => {
    const formData = new FormData();
    const imageFile = n === 1 ? this.satu : n === 2 ? this.dua : this.tiga;
    const name = n === 1 ? "satu" : n === 2 ? "dua" : "tiga";
    formData.append("img", imageFile.files[0]);

    try {
      const res = await axios.post(`picture/upload/${sku}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if (res.data.result.affectedRows) {
        this.setState({ [name]: res.data.url });

        if (n !== 3) {
          this.fileUpload(sku, n + 1);
        } else {
          this.openSnackBar("Upload Success");
          return "success";
        }
      }
    } catch (error) {
      return "uploadError" + error;
    }
  };

  submitFn = () => {
    const sku = parseInt(this.refs.sku.value),
      productName = this.refs.pname.value,
      category = this.refs.category.value,
      color = this.refs.color.value,
      unitPrice = this.refs.price.value,
      unitSize = parseInt(this.refs.size.value),
      unitStock = parseInt(this.refs.stock.value),
      g1 = this.satu,
      g2 = this.dua,
      g3 = this.tiga;

    // console.log({
    //   sku,
    //   productName,
    //   color,
    //   category,
    //   unitPrice,
    //   unitSize,
    //   unitStock
    // });
    // console.log(g1, g2, g3);
    if (
      !sku ||
      !productName ||
      !color ||
      !unitPrice ||
      !unitSize ||
      !unitStock ||
      !g1.files[0] ||
      !g2.files[0] ||
      !g3.files[0]
    ) {
      // console.log("ok");
      this.openSnackBar("All Field Must Be Filled");
      return;
    } else {
      axios
        .post("/products", {
          sku,
          productName,
          category,
          color,
          unitPrice
        })
        .then(res => {
          console.log(res);
          if (res.data.affectedRows) {
            axios
              .post("/products/size", {
                sku,
                unitSize,
                unitStock
              })
              .then(res => {
                if (res.data.affectedRows) {
                  // for (let i = 1; i < 4; i++) {
                  //   this.fileUpload(sku, i);
                  // }
                  this.fileUpload(sku, 1);
                }
              });
          }
        });
    }
  };

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
            <div className="head">
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
                  <input
                    type="text"
                    className="form-control"
                    id="sku"
                    ref="sku"
                  />
                </div>

                <label htmlFor="#pname" className="col-sm-2 col-form-label">
                  Product Name
                </label>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    id="pname"
                    ref="pname"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="#size" className="col-sm-1 col-form-label">
                  Size
                </label>
                <div className="col-sm-5">
                  <input
                    type="number"
                    className="form-control"
                    id="size"
                    ref="size"
                  />
                </div>
                <label htmlFor="#color" className="col-sm-1 col-form-label">
                  Color
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control"
                    id="color"
                    ref="color"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="#category" className="col-sm-1 col-form-label">
                  Category
                </label>
                <div className="col-sm-3">
                  <select
                    className="custom-select"
                    id="category"
                    ref="category"
                  >
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                  </select>
                </div>

                <label htmlFor="#price" className="col-sm-2 col-form-label">
                  Unit Price
                </label>
                <div className="col-sm-3">
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    ref="price"
                  />
                </div>

                <label htmlFor="#stock" className="col-sm-1 col-form-label">
                  Stock
                </label>
                <div className="col-sm-2">
                  <input
                    type="number"
                    className="form-control"
                    id="stock"
                    ref="stock"
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm">
                  <div className="pict">
                    <img
                      src={
                        this.state.satu
                          ? this.state.satu
                          : "https://www.zimbabwesituation.com/wp-content/themes/magone/assets/images/xdefault-thumbnail.png.pagespeed.ic.lnoMmrWq-X.png"
                      }
                      alt="pict front"
                    />
                  </div>
                  <input
                    type="file"
                    className="form-control"
                    id="price"
                    ref={input => (this.satu = input)}
                  />
                </div>

                <div className="col-sm">
                  <div className="pict">
                    <img
                      src={
                        this.state.dua
                          ? this.state.dua
                          : "https://www.glensfallskarate.com/wp-content/uploads/2017/04/default-image.jpg"
                      }
                      alt="pict front"
                    />
                  </div>
                  <input
                    type="file"
                    className="form-control"
                    id="price"
                    ref={input => (this.dua = input)}
                  />
                </div>

                <div className="col-sm">
                  <div className="pict">
                    <img
                      src={
                        this.state.tiga
                          ? this.state.tiga
                          : "https://www.glensfallskarate.com/wp-content/uploads/2017/04/default-image.jpg"
                      }
                      alt="pict front"
                    />
                  </div>
                  <input
                    type="file"
                    className="form-control"
                    id="stock"
                    ref={input => (this.tiga = input)}
                  />
                </div>
              </div>
            </form>
            <div className="row justify-content-end">
              <div className="col-sm-4 py-4">
                <button className="btn btn-dark" onClick={this.submitFn}>
                  <strong>Add</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
        <SnackBar open={this.state.open} message={this.state.message} />
      </div>
    );
  }
}

export default AddProduct;
