import React, { createContext, useContext, useState } from "react";

const StepContext = createContext();

export const useSteps = () => useContext(StepContext);

export const StepsProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [fileName, setFileName] = useState(null);

  const moveToNextStep = () => setCurrentStep(currentStep + 1);

  const handleFileUpload = (name) => {
    setFileName(name);
    moveToNextStep();
  };

  const resetSteps = () => {
    setCurrentStep(1);
    setFileName(null);
  };

  return (
    <StepContext.Provider
      value={{
        currentStep,
        fileName,
        moveToNextStep,
        handleFileUpload,
        resetSteps,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};
