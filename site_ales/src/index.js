import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter} from "react-router-dom"

import { Store } from "./store/store.js";

import ReactGA from "react-ga";

ReactGA.initialize("UA-174464399-1");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <BrowserRouter>
    <Store>
      <App />
    </Store>
  </BrowserRouter>,
  document.getElementById("root")
);

