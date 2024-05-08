import { createContext, useState } from "react";

export const executionWorkflowContext = createContext({
  activeTab: "Active",
});

const ExecutionWorkflowContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Active");

  return (
    <executionWorkflowContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </executionWorkflowContext.Provider>
  );
};
export default ExecutionWorkflowContextProvider;
