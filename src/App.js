import React from "react";
import { ResetStyle } from "./resetStyle";
import { IconFont } from "./assets/iconfont/iconfont";

import Header from "./components/header/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ResetStyle />
      <IconFont />
      <Header />
    </div>
  );
}

export default App;
