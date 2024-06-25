import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import jsonSeverProvider from "ra-data-json-server";
const dataProvider = jsonSeverProvider("/api");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App dataProvider={dataProvider} />
  </React.StrictMode>
);
