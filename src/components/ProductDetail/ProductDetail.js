import React, { Component } from "react";
import { connect } from "react-redux";
import LazyLoad from "react-lazy-load";

import CheckBox from "./CheckBox";
import ImageLoader from "./../../playground/ImageLoader";

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
      console.log({ userId, productId });
      // setTimeout(() => {
      //   this.setState({ flag: false });
      // }, 7000);
    }
    // console.log({ productId, sku, size });
  };

  buttonAddToCart = () => {
    if (this.props.userId) {
      return (
        <button
          className="btn btn-dark btncustome"
          onClick={this.clickAddToCart}
        >
          <strong>Add To Cart</strong>
        </button>
      );
    } else {
      return (
        <div>
          <p className="display-6">
            <strong>Please Login To Buy This Product</strong>
          </p>
        </div>
      );
    }
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
              <LazyLoad offsetVertical={0}>
                <ImageLoader
                  src={this.props.items.url1}
                  alt="shoes"
                  className="img-thumbnail my-5 images"
                />
              </LazyLoad>
              <LazyLoad offsetVertical={0}>
                <ImageLoader
                  src={this.props.items.url2}
                  alt="shoes"
                  className="img-thumbnail my-5 images moveout"
                />
              </LazyLoad>
              <LazyLoad offsetVertical={0}>
                <ImageLoader
                  src={this.props.items.url3}
                  alt="shoes"
                  className="img-thumbnail my-5 images moveout70"
                />
              </LazyLoad>
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
                  {this.buttonAddToCart()}
                  {this.emptyStockNotif()}
                  <ul className="ulcustom">
                    <li className="pb-0 mb-0">
                      <div className="row">
                        <div className="col-sm-1">
                          <span>
                            <i className="fa fa-check" aria-hidden="true" />
                          </span>
                        </div>
                        <div className="col-sm">
                          <p>Order before June to receive discount.</p>
                        </div>
                      </div>
                    </li>
                    <li className="py-0 my-0">
                      <div className="row">
                        <div className="col-sm-1">
                          <span>
                            <i className="fa fa-check" aria-hidden="true" />
                          </span>
                        </div>
                        <div className="col-sm">
                          <p>Pay with any bank.</p>
                        </div>
                      </div>
                    </li>
                    <li className="py-0 my-0">
                      <div className="row">
                        <div className="col-sm-1">
                          <span>
                            <i className="fa fa-check" aria-hidden="true" />
                          </span>
                        </div>
                        <div className="col-sm">
                          <p>World wide shipping</p>
                        </div>
                      </div>
                    </li>
                    <li className="py-0 my-0">
                      <div className="row">
                        <div className="col-sm-1">
                          <span>
                            <i className="fa fa-check" aria-hidden="true" />
                          </span>
                        </div>
                        <div className="col-sm">
                          <p>
                            When product not ready you can put it at your list.
                          </p>
                        </div>
                      </div>
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
