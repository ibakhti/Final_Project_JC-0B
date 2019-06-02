import axios from "./../config/axios";

export const orderItemList = userId => {
  return dispatch => {
    axios.get(`/checkout?userId=${userId}`).then(res => {
      dispatch({
        type: "ORDER_GET_ITEM_LIST",
        data: res.data
      });
    });
  };
};

export const shippingListAction = () => {
  return dispatch => {
    axios.get("/shipping").then(res => {
      // console.log(res.data);
      dispatch({
        type: "SHIPPING_LIST",
        data: res.data
      });
    });
  };
};

export const shippersListAction = () => {
  return dispatch => {
    axios.get("/shipper").then(res => {
      dispatch({
        type: "SHIPPERS_LIST",
        data: res.data
      });
    });
  };
};

export const shippingPriceAction = (p, sh, du, cdur) => {
  return {
    type: "SHIPPING_PRICE",
    price: p,
    shipper: sh,
    duration: du,
    compDur: cdur
  };
};

export const paymentListAction = () => {
  return dispatch => {
    axios
      .get("/payment")
      .then(res => {
        // console.log(res.data);
        dispatch({
          type: "PAYMENT_LIST",
          data: res.data
        });
      })
      .catch(err => {
        console.log("err from payment action:" + err);
      });
  };
};
