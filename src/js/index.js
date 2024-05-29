// src/js/index.js

// Import React into the bundle
import React from "react";
import ReactDOM from "react-dom";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Include your styles into the webpack bundle
import "../styles/index.css";

// Import your Home component
import Home from "./component/Home.jsx";

// Render your React application
ReactDOM.render(<Home />, document.querySelector("#app"));

