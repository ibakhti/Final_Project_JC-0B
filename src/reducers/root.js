import { combineReducers } from "redux";

import userAcountReducer from "./userAccount";
import cartReducer from "./cartReducer";
import pdReducer from "./pdReducer";

export default combineReducers({
  account: userAcountReducer,
  cartData: cartReducer,
  products: pdReducer
});
