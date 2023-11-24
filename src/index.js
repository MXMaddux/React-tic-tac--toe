import React from "react";
// import { ReactDOM } from "react-dom/client";
import * as ReactDOM from "react-dom";
import "./index.css";
import Game from "./components/Game";
import Board from "./components/Board";
// import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      {/* <App /> */}
      <Game />
    </Router>
  </React.StrictMode>
);
