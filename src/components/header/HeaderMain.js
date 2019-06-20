import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HeaderLogin from "./HeaderLogin";
import HeaderUsers from "./HeaderUsers";
import HeaderAdmin from "./HeaderAdmin";
import {
  actionLogin,
  actionLogout,
  actionCartGetData,
  actionRemoveCart,
  getProductDetailAction,
  getWaitingAction
} from "../../actions";
import "./header.css";

class HeaderMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
  }

  userLogin = (email, password) => {
    this.props.actionLogin(email, password);
  };

  userLogout = () => {
    this.props.actionLogout();
  };

  removeCart = (userId, productId, sku) => {
    this.props.actionRemoveCart(userId, productId, sku);
    console.log({ userId, productId, sku });
  };

  CheckOut = () => {
    this.setState({ flag: true });
  };

  redirectToCheckOut = () => {
    setInterval(() => {
      this.setState({ flag: false });
    }, 5000);
    if (this.state.flag) {
      return <Redirect to="/checkout" />;
    } else {
      return null;
    }
  };

  render() {
    if (!this.props.isAdmin) {
      if (!this.props.nameFromReducer) {
        return <HeaderLogin fnLogin={this.userLogin} />;
      } else {
        return (
          <div>
            <HeaderUsers
              userName={this.props.nameFromReducer}
              fnLogout={this.userLogout}
              userId={this.props.userId}
              actionCart={this.props.actionCartGetData}
              dataCart={this.props.cart}
              removeCart={this.removeCart}
              checkout={this.CheckOut}
              notif={this.props.notifWait}
              getWait={this.props.getWaitingAction}
            />
            {this.redirectToCheckOut()}
          </div>
        );
      }
    } else {
      return (
        <HeaderAdmin
          userName={this.props.nameFromReducer}
          fnLogout={this.userLogout}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    nameFromReducer: state.account.firstName,
    userId: state.account.id,
    isAdmin: state.account.isAdmin,
    cart: state.cartData.cart,
    notifWait: state.products.noWait
  };
};

export default connect(
  mapStateToProps,
  {
    actionLogin,
    actionLogout,
    actionCartGetData,
    actionRemoveCart,
    getProductDetailAction,
    getWaitingAction
  }
)(HeaderMain);
