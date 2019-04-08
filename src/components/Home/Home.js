import React, { Component } from "react";

import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        {/* content */}
        <div className="container mb-5">
          <div className="row pt-5">
            <p>
              <strong>Our New Collection</strong>
            </p>
          </div>

          {/* New Arrivel content */}
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?cs=srgb&dl=brand-design-fashion-1598508.jpg&fm=jpg"
                alt="shoes"
                className="img-thumbnail"
              />
              <p className="mb-0">lorem ipsum</p>
              <p>Rp.xxxxx</p>
            </div>
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1542219550-37153d387c27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                alt="shoes"
                className="img-thumbnail"
              />
              <p className="mb-0">lorem ipsum</p>
              <p>Rp.xxxxx</p>
            </div>
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                alt="shoes"
                className="img-thumbnail"
              />
              <p className="mb-0">lorem ipsum</p>
              <p>Rp.xxxxx</p>
            </div>
          </div>
        </div>

        {/* Category */}
        <div className="container-fluid my-5">
          <div className="row pt-5 mx-5">
            <p>
              <strong>Our Best Collection</strong>
            </p>
          </div>
          <div className="row">
            <div className="col-md">
              <img
                src="https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="shoes"
                className="img-thumbnail"
              />
            </div>
            <div className="col-md">
              <img
                src="https://images.pexels.com/photos/267294/pexels-photo-267294.jpeg?cs=srgb&dl=blur-classic-close-up-267294.jpg&fm=jpg"
                alt="shoes"
                className="img-thumbnail"
              />
            </div>
          </div>
          <div className="row justify-content-end mx-5 my-3">
            <a href="/" className="text-dark">
              <strong>See More</strong>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
