import React, { Component } from "react";

import DialogSelect from "./DialogSelect";
import SelectPay from "./SelectPay";

class Sp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipper: this.props.shipper,
      duration: this.props.cdur,
      payments: [],
      payMet: ""
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

  formNoRek = () => {
    if (this.state.payMet) {
      return (
        <div>
          <form className="form-group">
            <label htmlFor="#noRek">Please Fill Your Account Number</label>
            <input
              type="text"
              className="form-control"
              id="noRek"
              ref="noRek"
            />
          </form>
        </div>
      );
    }
  };

  getPayMet = pm => {
    this.setState({ payMet: pm });
  };

  render() {
    return (
      <div>
        <div className="row marSp">
          <div className="col-md border-right border-dark">
            <div>
              <div>
                <p className="mt-3 ml-2">
                  <strong>Shipper: </strong>
                  {this.state.shipper}
                </p>
                <p className="ml-2">
                  <strong>Duration: </strong>
                  {this.state.duration}
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
              <SelectPay
                paylist={this.props.paylist}
                payment={this.getPayMet}
              />
            </div>
            {this.formNoRek()}
          </div>
        </div>
      </div>
    );
  }
}

export default Sp;
