import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import 'flowbite';
import { Provider } from "react-redux";
import store from "./app/store";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  rootElement
);