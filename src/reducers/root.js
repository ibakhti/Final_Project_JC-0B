import { combineReducers } from "redux";

import userAcountReducer from "./userAccount";
import cartReducer from "./cartReducer";
import pdReducer from "./pdReducer";
import orderReducer from "./orderReducer";
import confirmReducer from "./confirmReducer";

export default combineReducers({
  account: userAcountReducer,
  cartData: cartReducer,
  products: pdReducer,
  checkout: orderReducer,
  confirm: confirmReducer
});
