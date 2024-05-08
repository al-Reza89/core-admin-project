import { createContext, useState } from "react";

export const captureWorkflowContext = createContext({
  activeTab: "Active",
});

const CaptureWorkflowContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Active");

  return (
    <captureWorkflowContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </captureWorkflowContext.Provider>
  );
};
export default CaptureWorkflowContextProvider;
