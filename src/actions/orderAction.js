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
