import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";

const store = createStore(todoReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
