import { combineReducers } from "redux";
import userReducer from "./user";
import serviceReducer from "./service";
import orderReducer from "./order";

const rootReducer = combineReducers({
  userReducer,
  serviceReducer,
  orderReducer,
});
export default rootReducer;
