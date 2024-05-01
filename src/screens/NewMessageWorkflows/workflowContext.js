import { createContext, useState } from "react";

export const newMessageWorkflowContext = createContext({
  activeTab: "Active",
});

const NewMessageWorkflowContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Active");

  return (
    <newMessageWorkflowContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </newMessageWorkflowContext.Provider>
  );
};
export default NewMessageWorkflowContextProvider;
