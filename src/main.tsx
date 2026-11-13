import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* HashRouter : les liens QR (/#/guides/poele) ne provoquent jamais de 404 sur GitHub Pages */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
