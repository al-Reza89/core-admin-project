import { createContext, useState } from "react";

export const chatApprovalWorkflowContext = createContext({
  activeTab: "Active",
});

const ChatApprovalWorkflowContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Active");

  return (
    <chatApprovalWorkflowContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </chatApprovalWorkflowContext.Provider>
  );
};
export default ChatApprovalWorkflowContextProvider;
