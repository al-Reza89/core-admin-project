// MessageContext.js

import React, { createContext, useState, useContext } from "react";

// Create a context for your messages
const MessageContext = createContext();

// Create a custom hook to consume the MessageContext
export const useMessageContext = () => useContext(MessageContext);

// Create a provider component to manage the state of messages
export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};
