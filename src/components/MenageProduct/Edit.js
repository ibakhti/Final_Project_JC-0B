import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "../../config/axios";
import SnackBar from "./SnackBar";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id1: "",
      id2: "",
      id3: "",
      satu: "",
      dua: "",
      tiga: "",
      sku: "",
      pname: "",
      color: "",
      category: "",
      price: "",
      size: "",
      stock: "",
      display: "",
      open: false,
      message: ""
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  openSnackBar = m => {
    this.setState({ open: true, message: m });
  };

  fileUpload = async (n, on) => {
    const formData = new FormData();
    const imageFile = n === 1 ? this.satu : n === 2 ? this.dua : this.tiga;
    const name = n === 1 ? "satu" : n === 2 ? "dua" : "tiga";
    const imgId =
      n === 1 ? this.state.id1 : n === 2 ? this.state.id2 : this.state.id3;
    // console.log([this.state.id1, this.state.id2, this.state.id3]);
    // console.log(imgId);
    formData.append("img", imageFile.files[0]);
    formData.append("imgId", imgId);
    try {
      const res = await axios.put(`picture/update/${on}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if (res.data.result.affectedRows) {
        this.setState({ [name]: res.data.url });
      }
    } catch (error) {
      return "uploadError" + error;
    }
  };

  editFn = async () => {
    const productName = this.refs.pname.value,
      color = this.refs.color.value,
      category = this.refs.category.value,
      unitPrice = this.refs.price.value,
      unitStock = this.refs.stock.value,
      stockDisplay = this.refs.display.value;

    const g1 = this.satu.files[0],
      g2 = this.dua.files[0],
      g3 = this.tiga.files[0];

    // console.log({ productName, color, category, price, unitStock });
    if (
      !productName ||
      !color ||
      !category ||
      !unitPrice ||
      !unitStock ||
      !stockDisplay
    ) {
      return this.openSnackBar("Please Fill All Column");
    }

    await axios.put(`/product/update?sku=${this.state.sku}`, {
      productName,
      color,
      category,
      unitPrice
    });
    await axios.put(
      `/product/update/size?productId=${this.props.match.params.pid}`,
      {
        unitStock,
        stockDisplay
      }
    );
    // console.log([g1, g2, g3]);
    if (g1 && g2 && g3) {
      // console.log("TTTT");
      for (let i = 1; i < 4; i++) {
        const name =
          i === 1
            ? this.state.satu.split("/")[4]
            : i === 2
            ? this.state.dua.split("/")[4]
            : this.state.tiga.split("/")[4];
        this.fileUpload(i, name);
      }
    } else if (g1) {
      const name = this.state.satu.split("/")[4];
      this.fileUpload(1, name);
    } else if (g2) {
      const name = this.state.dua.split("/")[4];
      this.fileUpload(2, name);
    } else if (g3) {
      const name = this.state.tiga.split("/")[4];
      this.fileUpload(3, name);
    }

    this.openSnackBar("Edit Success");
  };

  componentDidMount() {
    // console.log(this.props.match.params.sku);
    axios.get(`/edit?productId=${this.props.match.params.pid}`).then(res => {
      //   console.log(res);
      this.setState({
        sku: res.data[0].sku,
        pname: res.data[0].productName,
        color: res.data[0].color,
        size: res.data[0].unitSize,
        category: res.data[0].category,
        price: res.data[0].unitPrice,
        stock: res.data[0].unitStock,
        display: res.data[0].stockDisplay
      });

      axios.get(`/edit/pict?sku=${this.props.match.params.sku}`).then(res => {
        // console.log(res);
        this.setState({
          id1: res.data[0].imgId,
          id2: res.data[1].imgId,
          id3: res.data[2].imgId,
          satu: res.data[0].url1,
          dua: res.data[1].url2,
          tiga: res.data[2].url3
        });
      });
    });
  }

  render() {
    return (
      <div>
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
                  <strong>Edit Product</strong>
                </h4>
              </div>
            </div>
            <div className="row block ">
              <form>
                <div className="form-group row">
                  <div className="col-sm-2">
                    <p>
                      <strong>Sku : {this.state.sku}</strong>
                    </p>
                  </div>

                  <label htmlFor="#pname" className="col-sm-2 col-form-label">
                    Product Name
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      id="pname"
                      ref="pname"
                      defaultValue={this.state.pname}
                    />
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
                      defaultValue={this.state.price}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="#color" className="col-sm-1 col-form-label">
                    Color
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="text"
                      className="form-control"
                      id="color"
                      ref="color"
                      defaultValue={this.state.color}
                    />
                  </div>

                  <label
                    htmlFor="#category"
                    className="col-sm-1 col-form-label"
                  >
                    Category
                  </label>
                  <div className="col-sm-5">
                    <select
                      className="custom-select"
                      id="category"
                      ref="category"
                      value={this.state.category}
                      onChange={e => {
                        this.setState({ category: e.value });
                      }}
                    >
                      <option value="men">Men</option>
                      <option value="women">Women</option>
                    </select>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-sm-4">
                    <p>
                      <strong>Size: {this.state.size}</strong>
                    </p>
                  </div>

                  <label htmlFor="#stock" className="col-sm-1 col-form-label">
                    Stock
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="number"
                      className="form-control"
                      id="stock"
                      ref="stock"
                      defaultValue={this.state.stock}
                    />
                  </div>

                  <label htmlFor="#stock" className="col-sm-1 col-form-label">
                    display
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="number"
                      className="form-control"
                      id="stock"
                      ref="display"
                      defaultValue={this.state.display}
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
                  <button className="btn btn-dark" onClick={this.editFn}>
                    <strong>Edit</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SnackBar
          open={this.state.open}
          handleClose={this.handleClose}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default Edit;
