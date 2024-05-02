import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import App from "./App";
import { StepsProvider } from "./context/StepContext";
import { MessageProvider } from "./context/MessageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MessageProvider>
      <StepsProvider>
        <RecoilRoot>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RecoilRoot>
      </StepsProvider>
    </MessageProvider>
  </React.StrictMode>
);
