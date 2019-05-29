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

import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/App.css";

import { actionKeepLogin } from "./../actions";

const cookie = new cookies();

class App extends Component {
  componentDidMount() {
    const userId = cookie.get("userCookie");

    if (userId) this.props.actionKeepLogin(userId);
  }
  render() {
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
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { actionKeepLogin }
)(App);
