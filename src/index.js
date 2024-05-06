import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import App from "./App";
import { StepsProvider } from "./context/StepContext";
import { NavigationProvider } from "./context/NavigationContext";
import { ItemsProvider } from "./context/WorkflowContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavigationProvider>
      <ItemsProvider>
        <StepsProvider>
          <RecoilRoot>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </RecoilRoot>
        </StepsProvider>
      </ItemsProvider>
    </NavigationProvider>
  </React.StrictMode>
);
