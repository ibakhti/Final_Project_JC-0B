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
