import React, { Component } from "react";

class MyAddress extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#firstname">Address</label>
              <input type="text" className="form-control" ref="address" />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#firstname">city</label>
              <input type="text" className="form-control" ref="city" />
            </form>
          </div>

          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#firstname">state</label>
              <input type="text" className="form-control" ref="state" />
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#firstname">zip</label>
              <input type="number" className="form-control" ref="zip" />
            </form>
          </div>

          <div className="col-md">
            <form className="form-group">
              <label htmlFor="#firstname">phone number</label>
              <input type="number" className="form-control" ref="phoneNumber" />
            </form>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col d-flex justify-content-end">
            <button className="btn btn-dark">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyAddress;
