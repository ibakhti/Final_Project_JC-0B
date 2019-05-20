import { combineReducers } from "redux";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  error: ""
};

const initState = {
  cart: []
};

const userAcountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: action.userData.userId,
        firstName: action.userData.firstName,
        lastName: action.userData.lastName,
        email: action.userData.email,
        gender: action.userData.gender
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        gender: ""
      };

    case "REGISTER_ERROR":
      return {
        ...state,
        error: action.messege
      };
    default:
      return state;
  }
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CART":
      return { ...state, cart: action.data };

    default:
      return state;
  }
};
export default combineReducers({
  account: userAcountReducer,
  cartData: cartReducer
});
