import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UsernameProvider } from "./context/Username";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UsernameProvider>
      <App />
    </UsernameProvider>
  </React.StrictMode>,
);
