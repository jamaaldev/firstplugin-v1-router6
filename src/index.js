import { render } from "@wordpress/element";

import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Render the App component into the DOM
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("firstplugin"),
);
reportWebVitals();
