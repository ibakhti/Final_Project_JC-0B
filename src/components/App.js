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
import Footer from "./Footer/Footer";
import WaitingList from "./WaitingList/WaitingList";
import Cart from "./Cart/Cart";

import HomeAdmin from "./Home/HomeAdmin";
import ManageProduct from "./MenageProduct/MenageProduct";
import AddProduct from "./MenageProduct/AddProduct";
import Edit from "./MenageProduct/Edit";
import OrderAdmin from "./OrderAdmin/OrderAdmin";
import OrderDetail from "./OrderAdmin/OrderDetail";
import UserProfile from "./OrderAdmin/UserProfile";
import Sent from "./OrderAdmin/Sent";
import Completed from "./OrderAdmin/Completed";
import Shipping from "./Shipping/Shipping";

import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/App.css";

import { actionKeepLogin } from "./../actions";

const cookie = new cookies();

class App extends Component {
  componentDidMount() {
    const userId = cookie.get("userCookie");

    if (userId) this.props.actionKeepLogin(userId);
  }

  filter = route => {
    if (this.props.userId) {
      return route;
    } else {
      return Home;
    }
  };

  render() {
    if (!this.props.isAdmin) {
      return (
        <BrowserRouter>
          <div>
            <div>
              <HeaderMain />
              <Route path="/" exact component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/menproducts" component={MenProducts} />
              <Route path="/womenproducts" component={WomenProducts} />
              <Route path="/productdetail/:sku" component={ProductDetail} />
              <Route path="/myaccount" component={this.filter(MyAccount)} />
              <Route path="/mypassword" component={this.filter(MyPassword)} />
              <Route
                path="/myregaddress"
                component={this.filter(MyRegAddress)}
              />
              <Route path="/checkout" component={this.filter(Checkout)} />
              <Route path="/editaddress" component={this.filter(EditAddress)} />
              <Route path="/confirm" component={this.filter(Confirm)} />
              <Route path="/order" component={this.filter(Order)} />
              <Route path="/search" component={this.filter(Search)} />
              <Route path="/waiting" component={this.filter(WaitingList)} />
              <Route path="/cart" component={this.filter(Cart)} />
            </div>
            <Footer />
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
            <Route path="/edit/:pid/:sku" component={Edit} />
            <Route path="/order" component={OrderAdmin} />
            <Route path="/detail/:orderId" component={OrderDetail} />
            <Route path="/userProfile/:userId" component={UserProfile} />
            <Route path="/sent/:orderId/:userId" component={Sent} />
            <Route path="/completed" component={Completed} />
            <Route path="/shipping" component={Shipping} />
          </div>
        </BrowserRouter>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isAdmin: state.account.isAdmin,
    userId: state.account.id
  };
};
export default connect(
  mapStateToProps,
  { actionKeepLogin }
)(App);
