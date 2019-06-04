import axios from "../config/axios";

export const confirmPaymentAction = id => {
  return dispatch => {
    axios.get(`/payment/${id}`).then(res => {
      dispatch({
        type: "PAYMENT_GET",
        data: res.data[0]
      });
    });
  };
};

export const confirmTotalAction = t => {
  return {
    type: "PAYMENT_TOTAL",
    data: t
  };
};
