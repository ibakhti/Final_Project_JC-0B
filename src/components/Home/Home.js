import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "auto" }}>
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#id" role="button">
              Learn more
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
