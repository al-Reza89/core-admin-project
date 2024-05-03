import React, { useState, createContext, useContext } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [activeButton, setActiveButton] = useState("Workflows");

  const setActive = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <NavigationContext.Provider value={{ activeButton, setActive }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationButton = () => useContext(NavigationContext);
