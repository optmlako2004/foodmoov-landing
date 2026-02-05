// src/main.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import "./styles/transitions.css";
import "./styles/Toast.css";
import { ToastProvider } from "./context/ToastContext.js";
import { AuthProvider } from "./context/AuthContext.js";
import { GoogleMapsProvider } from "./context/GoogleMapsContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastProvider>
        <GoogleMapsProvider>
          <App />
        </GoogleMapsProvider>
      </ToastProvider>
    </AuthProvider>
  </React.StrictMode>
);
