import React from "react";
import ReactDOM from "react-dom";
import "./components/Accordion.scss";
import { App } from "./App";
import { DataProvider } from "./BeerContext";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
