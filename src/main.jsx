import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./context/AppContext";
import App from "./App.jsx";
import "./index.css";
import RegistrationPage from "./pages/Registration.jsx";
import RegistrationForm from "./pages/Submission.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);

