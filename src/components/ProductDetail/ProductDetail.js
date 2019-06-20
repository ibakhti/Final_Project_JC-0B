import React, { Component } from "react";
import { connect } from "react-redux";

import CheckBox from "./CheckBox";

import {
  actionCartGetData,
  getProductDetailAction,
  waitingListAction
} from "./../../actions/index";
import "./ProductDetail.css";
import axios from "./../../config/axios";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      userId: null,
      productId: null,
      checked: false
    };
  }

  sizeStocktmap = () => {
    return this.props.items.dataDisplay.map((data, i) => {
      return (
        <option key={i}>{`size ${data.unitSize}  ||   ${
          data.unitStock
        } left`}</option>
      );
    });
  };

  emptyStockNotif = () => {
    if (this.state.flag) {
      return (
        <div id="notif">
          <p>
            This product is not avalaible right now, we'll infrom you when
            product ready
          </p>
          <CheckBox
            checked={this.state.checked}
            handleChange={this.handleChange}
          />
        </div>
      );
    }
  };

  handleChange = e => {
    this.setState({ checked: true });
    // console.log([this.state.userId, this.state.productId]);

    this.props.waitingListAction(this.state.userId, this.state.productId);
  };

  clickAddToCart = () => {
    const userId = this.props.userId,
      quantity = 1,
      sizeArr = this.refs.size.value.split(" "),
      size = parseInt(sizeArr[1]),
      sku = parseInt(this.props.match.params.sku),
      pd = this.props.items.dataDisplay.filter(d => {
        return d.sku === sku && d.unitSize === size;
      }),
      productId = pd[0].productId;

    if (parseInt(sizeArr[3])) {
      axios
        .put("/cart/add", {
          userId,
          productId,
          quantity
        })
        .then(res => {
          // console.log(res);
          axios
            .put("/product/stock/update/minus", {
              productId
            })
            .then(res => {
              this.props.actionCartGetData(userId);
              this.props.getProductDetailAction(this.props.match.params.sku);
            });
        });
    } else {
      this.setState({ flag: true, userId: userId, productId: productId });
      setTimeout(() => {
        this.setState({ flag: false });
      }, 7000);
    }
    // console.log({ productId, sku, size });
  };

  componentDidMount() {
    this.props.getProductDetailAction(this.props.match.params.sku);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row pt-5">
            <div className="col-md">
              <img
                src={this.props.items.url1}
                alt="shoes"
                className="img-thumbnail my-5 images"
              />
              <img
                src={this.props.items.url2}
                alt="shoes"
                className="img-thumbnail my-5 images moveout"
              />
              <img
                src={this.props.items.url3}
                alt="shoes"
                className="img-thumbnail my-5 images moveout70"
              />
            </div>

            <div className="col-md">
              <div className="row justify-content-center pt-5">
                <div className="col-md-7">
                  <h2>{this.props.items.displayName}</h2>
                  <p className="pb-5 pt-3">
                    <strong>{this.props.items.displayPrice}</strong>
                  </p>
                  <form>
                    <div className="form-group">
                      <select className="form-control select-style" ref="size">
                        {this.sizeStocktmap()}
                      </select>
                    </div>
                  </form>
                  <button
                    className="btn btn-dark btncustome"
                    onClick={this.clickAddToCart}
                  >
                    <strong>Add To Cart</strong>
                  </button>
                  {this.emptyStockNotif()}
                  <ul className="ulcustom">
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
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

const mapStateToProps = state => {
  return {
    userId: state.account.id,
    items: state.products
  };
};

export default connect(
  mapStateToProps,
  { actionCartGetData, getProductDetailAction, waitingListAction }
)(ProductDetail);
