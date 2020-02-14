import { FOCUS_SEARCH_INPUT, BLUR_SEARCH_INPUT, INIT_LIST } from "../actionTypes";
import axios from "axios";
import { fromJS } from "immutable";

export const focusSearchInputAction = isFocus => ({
  type: FOCUS_SEARCH_INPUT
});

export const blurSearchInputAction = isFocus => ({
  type: BLUR_SEARCH_INPUT
});

const initList = list => ({
  type: INIT_LIST,
  list: fromJS(list)
});

export const getItemList = () => {
  return dispatch => {
    axios
      .get("http://localhost:38080/app/mock/16/header/search/list.json")
      .then(res => {
        const action = initList(res.data.list);
        dispatch(action);
      })
      .catch(() => console.log("error"));
  };
};
