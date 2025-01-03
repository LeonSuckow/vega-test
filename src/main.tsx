import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { UserPage } from "./pages/user/page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserPage />
  </StrictMode>
);
