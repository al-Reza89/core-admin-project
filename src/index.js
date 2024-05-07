import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
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
              <Toaster position="bottom-right" reverseOrder={false} />
              <App />
            </BrowserRouter>
          </RecoilRoot>
        </StepsProvider>
      </ItemsProvider>
    </NavigationProvider>
  </React.StrictMode>
);
