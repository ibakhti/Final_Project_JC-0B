import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import MyAddress from "./MyAddress";
import axios from "./../../config/axios";
import { actionKeepLogin, userAvatarAction } from "./../../actions";

import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/MyAccount/MyAccount.css";

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      flagAccount: false,
      flagAddress: false,
      errorA: "",
      errorB: ""
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

  errorAccountMessegeDisplay = () => {
    if (this.state.errorA) {
      setTimeout(() => {
        this.setState({ errorA: "" });
      }, 5000);

      return (
        <div className="col">
          <div className="alert alert-danger text-center">
            {this.state.errorA}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  errorAddressMessegeDisplay = () => {
    if (this.state.errorB) {
      setTimeout(() => {
        this.setState({ errorB: "" });
      }, 5000);

      return (
        <div className="col">
          <div className="alert alert-danger text-center">
            {this.state.errorB}
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

    if (!firstName || !lastName || !email) {
      this.setState({ errorA: "All Column Must Be Filled" });
    } else if (
      !parseInt(firstName) ||
      !parseInt(lastName) ||
      !parseInt(email)
    ) {
      this.setState({ errorA: "FirstName, LastName, Email Must Be a Letter" });
    } else {
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
    }
  };

  handleError = m => {
    this.setState({ errorB: m });
  };

  setFlagAddresstoTrue = () => {
    this.setState({ flagAddress: true });
  };

  fileUpload = async () => {
    const formData = new FormData();
    var imageFile = this.gambar;

    formData.append("avatar", imageFile.files[0]);
    formData.append("userId", this.props.userId);
    formData.append("oldImg", this.props.avatar);

    try {
      const res = await axios.put("/user/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      // console.log(res.data);
      this.props.userAvatarAction(res.data.img);
    } catch (error) {
      console.log("uploadError" + error);
    }
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
      <div className="container-fluid my-3">
        <div className="row pt-5">
          <div className="col-md-3 ml-3 fixed">
            <p>
              <strong>My Account</strong>
            </p>
            <p>
              <strong>Welcome {this.props.firstName}</strong>
            </p>
            <img
              alt="Your Avatar"
              src={
                this.props.avatar
                  ? `http://localhost:8080/user/avatar/${this.props.avatar}`
                  : ""
              }
              className="aImg mb-3 pb-3"
            />
            <form>
              <div className="form-group">
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                  ref={input => {
                    this.gambar = input;
                  }}
                />
              </div>
            </form>
            <div>
              <button className="btn btn-dark" onClick={this.fileUpload}>
                Upload
              </button>
            </div>
          </div>

          <div className="col-md offset-md-3">
            <p>
              <strong>Changed Your Personal Information</strong>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md offset-md-3">
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

          <div className="col-md mr-5">
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
          <div className="col-md offset-md-3 pt-3">
            <Link to="/mypassword" className="text-dark">
              <strong>Changed My Password</strong>
            </Link>
          </div>
          <div className="col-md offset-md-3 d-flex justify-content-end mr-5">
            <button className="btn btn-dark" onClick={this.submitUpdateData}>
              Submit
            </button>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm offset-sm-3">
            {this.successMeessageDisplay()}
            {this.errorAccountMessegeDisplay()}
          </div>
        </div>

        <div className="row mt-5 pt-5">
          <div className="col-md offset-md-3">
            <p>
              <strong>Changed Your Address </strong>
            </p>
          </div>
        </div>
        <MyAddress
          userId={this.props.userId}
          user={this.state.data}
          fnSuccess={this.setFlagAddresstoTrue}
          error={this.handleError}
        />

        <div className="row mt-3">
          <div className="col offset-md-3">
            {this.successMeessageDisplay()}
            {this.errorAddressMessegeDisplay()}
          </div>
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
    gender: state.account.gender,
    avatar: state.account.avatar
  };
};
export default connect(
  mapStateToProps,
  { actionKeepLogin, userAvatarAction }
)(MyAccount);
