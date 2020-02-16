import { combineReducers } from "redux";
import headerReducer from "./headerReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  header: headerReducer,
  login: loginReducer
});
