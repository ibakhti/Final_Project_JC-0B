import React, { Component } from "react";

import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/Footer/footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-sm-4">
            <div className="mb-2">
              <strong>About</strong>
            </div>
            <p>
              Founded in 2010 in Jakarta, B&C derived under the mindset of
              eliminating over-accessorized branding and focusing primarily on
              letting the quality of the product speak for itself.
            </p>
          </div>
          <div className="col-sm-2">
            <div className="mb-2">
              <strong>Address</strong>
            </div>
            <p>Jakarta, 11134 Mt.Hartono Jakarta Timur Daya</p>
          </div>
          <div className="col-sm-2">
            <div className="mb-2">
              <strong>Contact</strong>
            </div>
            <p>Email us</p>
            <p>BnC.@gmail.com</p>
            <p>021 824824</p>
          </div>
          <div className="col-sm-2">
            <div className="mb-2">
              <strong>Contact</strong>
            </div>
            <p>Shipping Info </p>
            <p>Contact</p>
            <p>Careers</p>
          </div>
          <div className="col-sm-2">
            <div className="mb-2">
              <strong>Follow us</strong>
            </div>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
