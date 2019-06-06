import axios from "./../config/axios";

export const actionCartGetData = userId => {
  return dispatch => {
    axios.get(`/cart?userId=${userId}`).then(res => {
      dispatch({
        type: "GET_CART",
        data: res.data
      });
    });
  };
};

export const actionRemoveCart = (uId, pId, sku) => {
  return dispatch => {
    axios
      .delete("/cart/remove", { data: { userId: uId, productId: pId } })
      .then(res => {
        // console.log(res);
        if (res.data.affectedRows) {
          axios
            .put("/product/stock/update/plus", {
              productId: pId
            })
            .then(res1 => {
              if (res1.data.affectedRows) {
                axios.get(`/cart?userId=${uId}`).then(res => {
                  dispatch({
                    type: "GET_CART",
                    data: res.data
                  });
                  axios.get(`/product/detail?sku=${sku}`).then(res => {
                    // console.log(res.data);
                    dispatch({
                      type: "GET_PRODUCT_DETAIL",
                      data: res.data
                    });
                  });
                });
              }
            });
        }
      });
  };
};

export const deleteAllCartAction = uId => {
  return dispatch => {
    axios.delete("allcart", { data: { userId: uId } }).then(res => {
      if (res.data.affectedRows) {
        dispatch({
          type: "GET_CART",
          data: []
        });
      }
    });
  };
};
