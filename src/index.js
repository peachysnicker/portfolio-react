import React from "react";
import ReactDOM from "react-dom";
// Will have to import my pages I create
import "./pages/about/about";
// import "./pages/landing/landing.css";

import App from "./App";

//First argument is the component we want to render, and the second is the container element on the page
ReactDOM.render(<App />, document.getElementById("root"));
