import React, { Component } from "react";

import DialogSelect from "./DialogSelect";

class Sp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipper: this.props.shipper,
      duration: this.props.cdur
    };
  }
  takeShippingData = (sh, du) => {
    if (sh !== "" && du !== "") {
      const dur = du.split(",");
      const rawPrice = du.split("price:");
      const price = parseInt(rawPrice[1].trim());
      this.setState({ shipper: sh, duration: dur[0] });
      this.props.shAction(price, sh, du, dur[0]);
    }
    // console.log(price);
  };

  render() {
    return (
      <div>
        <div className="row marSp">
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
                  shipper={this.props.shipper}
                  duration={this.props.duration}
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
