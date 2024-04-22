import { createContext, useState } from 'react';

export const workflowContext = createContext({
  activeTab: 'Active',
});

const WorkflowContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('Active');

  return (
    <workflowContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </workflowContext.Provider>
  );
};
export default WorkflowContextProvider;
