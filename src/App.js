import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./store/store";
import { Provider } from "react-redux";

import { ResetStyle } from "./resetStyle";
import "./App.css";
import { IconFont } from "./assets/iconfont/iconfont";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Login from "./pages/login/Login";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ResetStyle />
        <IconFont />
        <Header />
        <Router>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" exact component={Detail}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
