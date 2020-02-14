import { FOCUS_SEARCH_INPUT, BLUR_SEARCH_INPUT, INIT_LIST } from "../actionTypes";
import { fromJS } from "immutable";

const initialState = fromJS({
  isFocus: false,
  list: []
});

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOCUS_SEARCH_INPUT:
      return state.set("isFocus", true);
    case BLUR_SEARCH_INPUT:
      return state.set("isFocus", false);
    case INIT_LIST:
      return state.set("list", action.list);
    default:
      return state;
  }
};

export default headerReducer;
