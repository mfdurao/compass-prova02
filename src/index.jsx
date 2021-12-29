import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";

const { store } = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
