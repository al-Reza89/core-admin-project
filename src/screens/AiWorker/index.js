import React from "react";
import StartChat from "./StartChat";
import { aiWorkersButtons } from "../../utils/aiWorkersButtons";
import { useParams } from "react-router-dom";

const AiWorker = () => {
  const { aiWorkerName } = useParams();

  const originalTitle = aiWorkerName.replace(/-/g, " ");

  console.log({ originalTitle: originalTitle });
  const selectedButton = aiWorkersButtons.find(
    (button) => button.title === originalTitle
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <StartChat buttons={aiWorkersButtons} selectedButton={selectedButton} />
    </div>
  );
};

export default AiWorker;
