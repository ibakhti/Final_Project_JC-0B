import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeAdmin extends Component {
  render() {
    return (
      <div className="container">
        <div className="row py-5">
          <div className="col-md pr-1 iconBook">
            <div>
              <p>
                <i className="fas fa-book" />
              </p>
              <Link to="/" className="blc">
                <p id="menage">Menage Products</p>
              </Link>
            </div>
          </div>
          <div className="col-md pl-0 iconList">
            <div>
              <i class="fas fa-clipboard-list" />
              <Link to="/" className="blc">
                <p id="order">Orders</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeAdmin;
