const init = {
  payment: [],
  total: null
};

const confirmReducer = (state = init, action) => {
  switch (action.type) {
    case "PAYMENT_GET":
      return {
        ...state,
        payment: action.data
      };

    case "PAYMENT_TOTAL":
      return {
        ...state,
        total: action.data
      };
    default:
      return state;
  }
};

export default confirmReducer;
