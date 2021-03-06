import { FOCUS_SEARCH_INPUT, BLUR_SEARCH_INPUT, INIT_LIST, LOGIN, LOGOUT } from "../actionTypes";
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

export const logInAction = isLoggedIn => ({
  type: LOGIN
});

export const logOutAction = isLoggedIn => ({
  type: LOGOUT
});

export const login = obj => {
  return dispatch => {
    axios
      .post("http://localhost:38080/app/mock/16/login.json", obj)
      .then(res => {
        if (res.status === 200) {
          dispatch(logInAction());
        }
      })
      .catch(error => console.log(error));
  };
};
