const init = {
  order: ""
};

const adminReducer = (state = init, action) => {
  switch (action.type) {
    case "NUM_UNFULFILL_ORDER":
      return { ...state, order: action.data };

    default:
      return state;
  }
};

export default adminReducer;
