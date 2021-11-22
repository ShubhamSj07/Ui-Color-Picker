import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Mobile from "./Mobile";

ReactDOM.render(
  <>
    <div className="mobile_fallback">
      <Mobile />
    </div>
    <div className="app_view">
      <App />
    </div>
  </>,
  document.getElementById("root")
);
