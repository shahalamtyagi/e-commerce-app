import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { makeServer } from "./server";
import { Provider} from "./count";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider>
    <App />

    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
