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
      console.log(res.data);
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

export const shippingPriceAction = p => {
  return {
    type: "SHIPPING_PRICE",
    data: p
  };
};
