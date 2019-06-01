import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import MyAddress from "./MyAddress";
import axios from "./../../config/axios";
import { actionKeepLogin } from "./../../actions";

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      flagAccount: false,
      flagAddress: false
    };
  }

  successMeessageDisplay = () => {
    if (this.state.flagAccount) {
      setTimeout(() => {
        this.setState({ flagAccount: false });
      }, 3000);

      return (
        <div className="col">
          <div className="alert alert-success text-center">
            Changed Account Success
          </div>
        </div>
      );
    } else if (this.state.flagAddress) {
      setTimeout(() => {
        this.setState({ flagAddress: false });
      }, 3000);

      return (
        <div className="col">
          <div className="alert alert-success text-center">
            Changed Address Success
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  submitUpdateData = () => {
    const firstName = this.refs.firstName.value,
      lastName = this.refs.lastName.value,
      email = this.refs.email.value,
      gender = this.refs.gender.checked ? "men" : "women";

    axios
      .put(`/users/update/${this.props.userId}`, {
        firstName,
        lastName,
        email,
        gender
      })
      .then(res => {
        if (res.data.changedRows) {
          this.props.actionKeepLogin(this.props.userId);
          this.setState({ flagAccount: true });
        }
      });
  };

  setFlagAddresstoTrue = () => {
    this.setState({ flagAddress: true });
  };

  componentDidMount() {
    axios.get(`/users/address?userId=${this.props.userId}`).then(res => {
      if (res.status === 200) {
        this.setState({ data: res.data[0] });
      }
    });
  }

  render() {
    return (
      <div className="container my-3">
        <div className="row pt-5">
          <div className="col-md">
            <p>
              <strong>Changed Your Personal Information</strong>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#firstname">Frist Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                ref="firstName"
                defaultValue={this.props.firstName}
              />
            </form>

            <form className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                ref="email"
                defaultValue={this.props.email}
              />
            </form>
          </div>

          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#lastname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                ref="lastName"
                defaultValue={this.props.lastName}
              />
            </form>

            <form className="form-group mt-3">
              <div className="my-3">Gender</div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="men"
                  name="customRadioInline1"
                  className="custom-control-input"
                  defaultChecked={this.props.gender === "men" ? true : false}
                  ref="gender"
                />
                <label className="custom-control-label" htmlFor="men">
                  Men
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="women"
                  name="customRadioInline1"
                  defaultChecked={this.props.gender === "women" ? true : false}
                  className="custom-control-input"
                />
                <label className="custom-control-label" htmlFor="women">
                  Women
                </label>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col pt-3">
            <Link to="/mypassword" className="text-dark">
              <strong>Changed My Password</strong>
            </Link>
          </div>
          <div className="col d-flex justify-content-end">
            <button className="btn btn-dark" onClick={this.submitUpdateData}>
              Submit
            </button>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">{this.successMeessageDisplay()}</div>
        </div>

        <div className="row mt-5 pt-5 pl-3">
          <p>
            <strong>Changed Your Address </strong>
          </p>
        </div>
        <MyAddress
          userId={this.props.userId}
          user={this.state.data}
          fnSuccess={this.setFlagAddresstoTrue}
        />

        <div className="row mt-3">
          <div className="col">{this.successMeessageDisplay()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.account.id,
    firstName: state.account.firstName,
    lastName: state.account.lastName,
    email: state.account.email,
    gender: state.account.gender
  };
};
export default connect(
  mapStateToProps,
  { actionKeepLogin }
)(MyAccount);
