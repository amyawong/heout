import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ReactDOM.render(
//   <div>
//     <App />
//   </div>,
//   document.getElementById("app")
// );

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)