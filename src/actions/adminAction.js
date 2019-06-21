import axios from "../config/axios";

export const orderCountAction = () => {
  return dispatch => {
    axios.get("/count").then(res => {
      dispatch({
        type: "NUM_UNFULFILL_ORDER",
        data: res.data[0].noFulfillOrder
      });
    });
  };
};
