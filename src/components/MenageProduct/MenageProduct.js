import React, { Component } from "react";
import { Link } from "react-router-dom";

import DeleteDialog from "./DeleteDialog";
import axios from "./../../config/axios";
import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/MenageProduct/manage.css";

class MenageProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      copy: [],
      asc: false,
      up: "",
      down: "dis",
      key: "",
      open: false,
      productId: "",
      sku: ""
    };
  }

  sortTable = iden => {
    if (this.state.asc) {
      // console.log(this.state.asc);
      const ds = this.state.copy.sort((a, b) => {
        if (a[iden] > b[iden]) {
          return 1;
        } else {
          return -1;
        }
      });
      this.setState({ copy: ds, up: "", down: "dis" });
    } else {
      // console.log("dsc");
      const ds = this.state.copy.sort((a, b) => {
        if (a[iden] > b[iden]) {
          return -1;
        } else {
          return 1;
        }
      });
      this.setState({ copy: ds, down: "", up: "dis" });
    }
  };

  SeachItem = p => {
    if (p === "all") {
      this.setState({ copy: this.state.data });
    } else if (p === "productName" || p === "color" || p === "category") {
      const result = this.state.data.filter(a => {
        return a[p] === this.state.key;
      });

      this.setState({ copy: result });
    } else {
      console.log(this.state.key);
      const result = this.state.data.filter(a => {
        return a[p] === parseInt(this.state.key);
      });

      this.setState({ copy: result });
    }
  };

  displayTable = () => {
    return this.state.copy.map((it, i) => {
      return (
        <tr key={i}>
          <th scope="row">
            <Link to={`/edit/${it.productId}/${it.sku}`}>{it.productId}</Link>
          </th>
          <td>{it.sku}</td>
          <td>{it.productName}</td>
          <td>{it.color}</td>
          <td>{it.category}</td>
          <td>{it.unitPrice}</td>
          <td>{it.unitSize}</td>
          <td>{it.unitStock}</td>
          <td>{it.stockDisplay}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.setState({
                  open: true,
                  productId: it.productId,
                  sku: it.sku
                });
              }}
            >
              <strong>Delete</strong>
            </button>
          </td>
        </tr>
      );
    });
  };

  deleteItem = () => {
    console.log([this.state.productId, this.state.sku]);
    axios
      .delete("/product/delete", {
        data: { productId: this.state.productId, sku: this.state.sku }
      })
      .then(res => {
        if (res.data.affectedRows) {
          this.setState({ open: false });
          this.getAllData();
        }
      });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  getAllData = () => {
    axios.get("/allproduct").then(res => {
      this.setState({ data: res.data, copy: res.data });
    });
  };

  componentDidMount() {
    this.getAllData();
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
          <div className="col-sm">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Search
                </button>
                <div className="dropdown-menu">
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => {
                      this.SeachItem("all");
                    }}
                  >
                    Show All
                  </button>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => {
                      this.SeachItem("productId");
                    }}
                  >
                    by Product Id
                  </button>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => {
                      this.SeachItem("sku");
                    }}
                  >
                    by SKU
                  </button>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => {
                      this.SeachItem("productName");
                    }}
                  >
                    by Product Name
                  </button>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => {
                      this.SeachItem("color");
                    }}
                  >
                    by Color
                  </button>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => {
                      this.SeachItem("category");
                    }}
                  >
                    by Category
                  </button>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => {
                      this.SeachItem("unitPrice");
                    }}
                  >
                    by Unit Price
                  </button>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => {
                      this.SeachItem("unitSize");
                    }}
                  >
                    by Unit Size
                  </button>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => {
                      this.SeachItem("unitStock");
                    }}
                  >
                    by Unit Stock
                  </button>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => {
                      this.SeachItem("stockDisplay");
                    }}
                  >
                    by Unit Display
                  </button>
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
                onChange={e => this.setState({ key: e.target.value })}
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="dropdown mb-2">
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className={this.state.down}>
                  <i className={`fas fa-sort-down`} />
                </span>
                <span className={this.state.up}>
                  <i className={`fas fa-sort-up`} />
                </span>
                Sort
              </button>
              <div
                className="dropdown-menu whiteBack"
                aria-labelledby="dropdownMenu2"
              >
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    this.setState({ asc: !this.state.asc });
                    this.sortTable("productId");
                  }}
                >
                  by Product Id
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    this.setState({ asc: !this.state.asc });
                    this.sortTable("sku");
                  }}
                >
                  by SKU
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    this.setState({ asc: !this.state.asc });
                    this.sortTable("productName");
                  }}
                >
                  by Product Name
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    this.setState({ asc: !this.state.asc });
                    this.sortTable("color");
                  }}
                >
                  by Color
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    this.setState({ asc: !this.state.asc });
                    this.sortTable("category");
                  }}
                >
                  by Category
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    this.setState({ asc: !this.state.asc });
                    this.sortTable("unitPrice");
                  }}
                >
                  by Unit Price
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    this.setState({ asc: !this.state.asc });
                    this.sortTable("unitSize");
                  }}
                >
                  by Unit Size
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    this.setState({ asc: !this.state.asc });
                    this.sortTable("unitStock");
                  }}
                >
                  by Unit Stock
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    this.setState({ asc: !this.state.asc });
                    this.sortTable("stockDisplay");
                  }}
                >
                  by Unit Display
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Product Id</th>
                <th scope="col">SKU</th>
                <th scope="col">Product Name</th>
                <th scope="col">Color</th>
                <th scope="col">Category</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Unit Size</th>
                <th scope="col">Unit Stock</th>
                <th scope="col">Unit Display</th>
                <th scope="col">...</th>
              </tr>
            </thead>
            <tbody>{this.displayTable()}</tbody>
          </table>
        </div>
        <DeleteDialog
          open={this.state.open}
          handleClose={this.handleClose}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default MenageProduct;
