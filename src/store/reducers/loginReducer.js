import { LOGIN, LOGOUT } from "../actionTypes";
import { fromJS } from "immutable";

const initialState = fromJS({
  isLoggedIn: false
});

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state.set("isLoggedIn", true);
    case LOGOUT:
      return state.set("isLoggedIn", false);
    default:
      return state;
  }
};

export default loginReducer;
