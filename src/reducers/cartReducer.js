const initState = {
  cart: []
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CART":
      return { ...state, cart: action.data };

    default:
      return state;
  }
};

export default cartReducer;
