import React, { Component } from "react";
import { connect } from "react-redux";

import { getWaitingAction, delWaitingAction } from "./../../actions/index";
import { Link, Redirect } from "react-router-dom";

import "/home/ilham/Documents/Purwadhika/Final_project/Final_Project_JC-0B/src/components/WaitingList/waitinglist.css";
// import axios from "../../config/axios";

class WaitingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      sku: ""
    };
  }

  DeleteList = (id, sku) => {
    this.props.delWaitingAction(id, this.props.userId);
    this.setState({ flag: true, sku: sku });
  };

  redirectToProduct = () => {
    if (this.state.flag) {
      return (
        <div>
          <Redirect to={`/productdetail/${this.state.sku}`} />
        </div>
      );
    } else {
      return null;
    }
  };

  RemoveList = id => {
    this.props.delWaitingAction(id, this.props.userId);
  };

  display = () => {
    if (this.props.waitData.length !== 0) {
      return this.waitingList();
    } else {
      return (
        <div className="col-md py-5 mb-5 d-flex justify-content-center">
          <h1 className="display-4">Your Wait List Is Empty</h1>
        </div>
      );
    }
  };

  waitingList = () => {
    return this.props.waitData.map(it => {
      if (it.stockDisplay) {
        return (
          <div className="col-md-4 px-1" key={it.sku}>
            <Link to={"/productdetail/" + it.sku}>
              <img
                src={`http://localhost:8080/picture/${it.img}`}
                alt="shoes men"
                className="imgClass"
                onClick={() => {
                  this.DeleteList(it.id, it.sku);
                }}
              />
            </Link>
          </div>
        );
      } else {
        return (
          <div className="col-md-4 px-1" key={it.sku}>
            <img
              src={`http://localhost:8080/picture/${it.img}`}
              alt="shoes men"
              className="imgClass notReady"
            />
            <h2 className="text">
              <strong>Not Ready</strong>
            </h2>
            <button
              className="btn btn-dark btnwait"
              onClick={() => {
                this.RemoveList(it.id);
              }}
            >
              <strong>Remove</strong>
            </button>
          </div>
        );
      }
    });
  };

  componentDidMount() {
    this.props.getWaitingAction(this.props.userId);
  }
  render() {
    return (
      <div className="container">
        <div className="row pt-5 pb-3">
          <strong>Your List</strong>
        </div>
        <div className="row">{this.display()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.account.id,
    waitData: state.products.dataWaiting
  };
};
export default connect(
  mapStateToProps,
  { getWaitingAction, delWaitingAction }
)(WaitingList);
