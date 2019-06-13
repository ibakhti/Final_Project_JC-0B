import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import cookies from "universal-cookie";
import { connect } from "react-redux";

import HeaderMain from "./header/HeaderMain";
import Register from "./Register/Register";
import Home from "./Home/Home";
import MenProducts from "./MenProducts/MenProducts";
import WomenProducts from "./WomenProducts/WomenProducts";
import ProductDetail from "./ProductDetail/ProductDetail";
import MyAccount from "./MyAccount/MyAccount";
import MyPassword from "./MyAccount/MyPassword";
import MyRegAddress from "./MyAccount/MyRegAddress";
import Checkout from "./Checkout/ChekoutMain";
import EditAddress from "./Checkout/editAddress";
import Confirm from "./Confirm/Confirm";
import Order from "./Order/Order";
import Search from "./Search/Search";

import HomeAdmin from "./Home/HomeAdmin";
import ManageProduct from "./MenageProduct/MenageProduct";
import AddProduct from "./MenageProduct/AddProduct";

import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/App.css";

import { actionKeepLogin } from "./../actions";

const cookie = new cookies();

class App extends Component {
  componentDidMount() {
    const userId = cookie.get("userCookie");

    if (userId) this.props.actionKeepLogin(userId);
  }
  render() {
    if (!this.props.isAdmin) {
      return (
        <BrowserRouter>
          <div>
            <HeaderMain />
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/menproducts" component={MenProducts} />
            <Route path="/womenproducts" component={WomenProducts} />
            <Route path="/productdetail/:sku" component={ProductDetail} />
            <Route path="/myaccount" component={MyAccount} />
            <Route path="/mypassword" component={MyPassword} />
            <Route path="/myregaddress" component={MyRegAddress} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/editaddress" component={EditAddress} />
            <Route path="/confirm" component={Confirm} />
            <Route path="/order" component={Order} />
            <Route path="/search" component={Search} />
          </div>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <div>
            <HeaderMain />
            <Route path="/" exact component={HomeAdmin} />
            <Route path="/manage" component={ManageProduct} />
            <Route path="/addproduct" component={AddProduct} />
          </div>
        </BrowserRouter>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isAdmin: state.account.isAdmin
  };
};
export default connect(
  mapStateToProps,
  { actionKeepLogin }
)(App);
