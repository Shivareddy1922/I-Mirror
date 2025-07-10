import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Enterotp } from "./screens/Enterotp";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Enterotp />
  </StrictMode>,
);
