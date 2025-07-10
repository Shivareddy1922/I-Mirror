import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SetupProfile } from "./screens/SetupProfile";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <SetupProfile />
  </StrictMode>,
);
