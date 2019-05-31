import React, { Component } from "react";

import DialogSelect from "./DialogSelect";

class Sp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipper: "",
      duration: ""
    };
  }
  takeShippingData = (sh, du) => {
    const dur = du.split(",");
    const rawPrice = du.split("price:");
    const price = parseInt(rawPrice[1].trim());
    this.setState({ shipper: sh, duration: dur[0] });
    this.props.shAction(price);
    // console.log(price);
  };

  render() {
    return (
      <div>
        <div className="row my-5">
          <div className="col-md border-right border-dark">
            <div>
              <div>
                <p className="mt-3 ml-2">
                  <strong>{`Shipper: ${this.state.shipper}`}</strong>
                </p>
                <p className="ml-2">
                  <strong>{`Duration: ${this.state.duration}`}</strong>
                </p>
                <DialogSelect
                  dataShipping={this.props.shipping}
                  dataShippers={this.props.shippers}
                  giveShippingData={this.takeShippingData}
                />
              </div>
            </div>
          </div>
          <div className="col-md">
            <div>
              <p>
                <strong>Payment Method</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sp;
