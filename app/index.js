/* eslint-disable no-unused-vars */

// Modules
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// Components
import App from "./components/App.jsx";

// Styles
import $ from "jquery";
import "bootstrap";
import "./scss/styles.scss";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
