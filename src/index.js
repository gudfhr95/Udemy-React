import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index";

ReactDOM.render(
  <Provider store={StorageEvent}>
    <App />
  </Provider>,
  document.getElementById("root")
);
