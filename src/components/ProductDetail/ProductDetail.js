import React, { Component } from "react";
import "./ProductDetail.css";

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row pt-5">
            <div className="col-md">
              <img
                src="https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt="shoes"
                className="img-thumbnail my-5 images"
              />
              <img
                src="https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?ixlib=rb-1.2.1&auto=format&fit=crop&w=703&q=80"
                alt="shoes"
                className="img-thumbnail my-5 images moveout"
              />
              <img
                src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
                alt="shoes"
                className="img-thumbnail my-5 images moveout70"
              />
            </div>

            <div className="col-md">
              <div className="row justify-content-center pt-5">
                <div className="col-md-7">
                  <h2>Lorem ipsum dolor sit amet.</h2>
                  <p className="pb-5 pt-3">
                    <strong>Rp.xxxx</strong>
                  </p>
                  <form>
                    <div className="form-group">
                      <select className="form-control select-style">
                        <option>size</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </form>
                  <button className="btn btn-dark btncustome">
                    <strong>Add To Cart</strong>
                  </button>
                  <ul className="ulcustom">
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
