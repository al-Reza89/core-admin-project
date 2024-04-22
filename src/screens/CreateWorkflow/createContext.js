import { createContext, useState } from 'react';

export const createWorkflowContext = createContext({
  intermediateSteps: [],
  addIntermediateSource: () => {},
  removeIntermediateSource: () => {},
  setStepValue: (val, id) => {},
  removeAllIntSource: () => {},
});

export const ContextProvider = ({ children }) => {
  const [intermediateSources, setIntermediateSources] = useState([]);
  const addIntermediateSource = () => {
    const newIntSource = {
      id: Date.now(),
      step: 'Upload File (Upload an image, spreadsheet, pdf or word doc)',
    };
    setIntermediateSources([...intermediateSources, newIntSource]);
  };
  const removeIntermediateSource = (id) => {
    setIntermediateSources(
      intermediateSources.filter((item) => item.id !== id)
    );
  };
  const removeAllIntSource = () => {
    setIntermediateSources([]);
  };
  const setStepValue = (val, id) => {
    const newValue = intermediateSources.find((item) => item.id === id);
    newValue.step = val;
    setIntermediateSources(
      intermediateSources.map((item) => (item.id === id ? newValue : item))
    );
  };

  return (
    <createWorkflowContext.Provider
      value={{
        intermediateSources,
        addIntermediateSource,
        removeIntermediateSource,
        setStepValue,
        removeAllIntSource,
      }}
    >
      {children}
    </createWorkflowContext.Provider>
  );
};
