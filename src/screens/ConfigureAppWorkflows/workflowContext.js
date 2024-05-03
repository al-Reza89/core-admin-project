import { createContext, useState } from "react";

export const configureAppWorkflowsContext = createContext({
  activeTab: "Active",
});

const ConfigureAppWorkflowsContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Active");

  return (
    <configureAppWorkflowsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </configureAppWorkflowsContext.Provider>
  );
};
export default ConfigureAppWorkflowsContextProvider;
