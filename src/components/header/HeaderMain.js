import React, { Component } from "react";
import { connect } from "react-redux";

import HeaderLogin from "./HeaderLogin";
import HeaderUsers from "./HeaderUsers";
import { actionLogin, actionLogout } from "../../actions";
import "./header.css";

class HeaderMain extends Component {
  userLogin = (email, password) => {
    this.props.actionLogin(email, password);
  };

  userLogout = () => {
    this.props.actionLogout();
  };

  render() {
    if (!this.props.nameFromReducer) {
      return <HeaderLogin fnLogin={this.userLogin} />;
    } else {
      return (
        <HeaderUsers
          userName={this.props.nameFromReducer}
          fnLogout={this.userLogout}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    nameFromReducer: state.account.firstName
  };
};

export default connect(
  mapStateToProps,
  { actionLogin, actionLogout }
)(HeaderMain);
