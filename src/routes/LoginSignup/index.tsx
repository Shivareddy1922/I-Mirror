import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LoginSignup } from "./screens/LoginSignup";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LoginSignup />
  </StrictMode>,
);
