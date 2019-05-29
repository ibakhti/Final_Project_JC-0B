const init = {
  data: [],
  total: null
};

const orderReducer = (state = init, action) => {
  switch (action.type) {
    case "ORDER_GET_ITEM_LIST":
      return {
        ...state,
        data: action.data[0],
        total: action.data[1][0].subTotal
      };

    default:
      return state;
  }
};

export default orderReducer;
