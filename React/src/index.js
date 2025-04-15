import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PageProvider } from "./context/Pagecontext";
import { UserProvider } from "./context/Usercontext";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <PageProvider>
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </PageProvider>
  </React.StrictMode>
);
