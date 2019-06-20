import axios from "./../config/axios";

export const getProductDetailAction = sku => {
  return dispatch => {
    axios.get(`/product/detail?sku=${sku}`).then(res => {
      dispatch({
        type: "GET_PRODUCT_DETAIL",
        data: res.data
      });
    });
  };
};

export const waitingListAction = (userId, productId) => {
  return dispatch => {
    axios
      .put(`/waiting`, {
        userId,
        productId
      })
      .then(res => {
        if (res.data.affectedRows) {
          axios.get(`/waiting/get?userId=${userId}`).then(res => {
            if (res.data.affectedRows) {
              dispatch({
                type: "WAITING",
                data: res.data
              });
            }
          });
        }
      });
  };
};

export const getWaitingAction = userId => {
  return dispatch => {
    axios.get(`/waiting/get?userId=${userId}`).then(res => {
      dispatch({
        type: "WAITING",
        data: res.data
      });
    });
  };
};

export const delWaitingAction = (id, userId) => {
  return dispatch => {
    axios.delete("waiting", { data: { id } }).then(res => {
      if (res.data.affectedRows) {
        axios.get(`/waiting/get?userId=${userId}`).then(res => {
          dispatch({
            type: "WAITING",
            data: res.data
          });
        });
      }
    });
  };
};
