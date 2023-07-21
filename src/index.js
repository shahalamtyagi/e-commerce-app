import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { contextProvider } from "./Context";

import { makeServer } from "./server";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    {/* <contextProvider> */}
    <App />
    {/* </contextProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
