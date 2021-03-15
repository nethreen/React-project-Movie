import React from "react";
import ReactDom from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// js

import App from "./components/App";
import store from './redux/store';
import {Provider} from  "react-redux";

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>

, document.getElementById("root"));
