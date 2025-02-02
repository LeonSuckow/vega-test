import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import { CustomRouter } from "./router/router";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CustomRouter />
    </BrowserRouter>
  </StrictMode>
);
