import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1512654755163-0f342db4466f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block caption">
              <h5>
                <strong>B & C</strong>
              </h5>
              <p>Our Finnest Collection</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1512640122685-e77ab16ad8c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block caption">
              <h5>
                <strong>B & C</strong>
              </h5>
              <p>Our Finnest Collection</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1459173422306-0ce3fb37f832?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block caption">
              <h5>
                <strong>B & C</strong>
              </h5>
              <p>Our Finnest Collection</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
