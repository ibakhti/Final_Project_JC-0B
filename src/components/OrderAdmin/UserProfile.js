import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../config/axios";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(`/admin/customer?userId=${this.props.match.params.userId}`)
      .then(res => {
        this.setState({ data: res.data[0] });
      });
  }
  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <Link to="/order" className="linkBlack">
            <p>
              <strong>to Order</strong>
            </p>
          </Link>
        </div>
        <div className="row pb-5">
          <div className="col-sm-2">
            <div>
              <img
                src={
                  this.state.data.avatar
                    ? `http://localhost:8080/user/avatar/${
                        this.state.data.avatar
                      }`
                    : ""
                }
                alt="avatar"
                className="imgfit"
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="d-flex justify-content-center">
              <h4>
                <strong>Customer Profile</strong>
              </h4>
            </div>
            <div className="border-bottom border-dark">
              <p className="mb-0 mt-3">
                <strong>User Id:</strong> {this.state.data.userId}
              </p>
            </div>
            <div className="border-bottom border-dark">
              <p className="mb-0 mt-3">
                <strong>First Name:</strong> {this.state.data.firstName}
              </p>
            </div>
            <div className="border-bottom border-dark">
              <p className="mb-0 mt-3">
                <strong>Last Name:</strong> {this.state.data.lastName}
              </p>
            </div>
            <div className="border-bottom border-dark">
              <p className="mb-0 mt-3">
                <strong>email:</strong> {this.state.data.email}
              </p>
            </div>
            <div className="border-bottom border-dark">
              <p className="mb-0 mt-3">
                <strong>Address:</strong> {this.state.data.address}
              </p>
            </div>
            <div className="border-bottom border-dark">
              <p className="mb-0 mt-3">
                <strong>City:</strong> {this.state.data.city}
              </p>
            </div>
            <div className="border-bottom border-dark">
              <p className="mb-0 mt-3">
                <strong>State:</strong> {this.state.data.state}
              </p>
            </div>
            <div className="border-bottom border-dark">
              <p className="mb-0 mt-3">
                <strong>Zip:</strong> {this.state.data.zip}
              </p>
            </div>
            <div className="border-bottom border-dark">
              <p className="mb-0 mt-3">
                <strong>Phone Number:</strong> {this.state.data.phoneNumber}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
