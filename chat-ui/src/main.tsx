import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MessageContextProvider from "./context/MessageContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MessageContextProvider>
        <App />
      </MessageContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
