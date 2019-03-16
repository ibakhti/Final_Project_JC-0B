import { combineReducers } from "redux";

const initialState = {
  id: "",
  firstName: ""
};

const userAcountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: action.userData.id,
        firstName: action.userData.firstName
      };

    default:
      return state;
  }
};

export default combineReducers({
  account: userAcountReducer
});
