import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 🔥 Fuerza hard el reset del navegador
document.documentElement.style.margin = "0";
document.documentElement.style.padding = "0";
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.boxSizing = "border-box";
document.body.style.overflow = "hidden";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
