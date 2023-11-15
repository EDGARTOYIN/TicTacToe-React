import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";

const rootElement = document.getElementById("root");
const app = ReactDOM.createRoot(rootElement);

app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
