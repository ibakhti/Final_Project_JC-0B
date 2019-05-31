const init = {
  data: [],
  total: null,
  shipping: [],
  shippers: [],
  price: 0
};

const orderReducer = (state = init, action) => {
  switch (action.type) {
    case "ORDER_GET_ITEM_LIST":
      return {
        ...state,
        data: action.data[0],
        total: action.data[1][0].subTotal
      };

    case "SHIPPING_LIST":
      return {
        ...state,
        shipping: action.data
      };

    case "SHIPPERS_LIST":
      return {
        ...state,
        shippers: action.data
      };

    case "SHIPPING_PRICE":
      return {
        ...state,
        price: action.data
      };
    default:
      return state;
  }
};

export default orderReducer;
