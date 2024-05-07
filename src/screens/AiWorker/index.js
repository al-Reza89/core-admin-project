import React from "react";
import StartChat from "./StartChat";
import { aiWorkersButtons } from "../../utils/aiWorkersButtons";
import { useParams } from "react-router-dom";
import styles from "./AiWorker.module.sass";

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
        // backgroundColor: "#141718",
      }}
      className={styles.container}
    >
      <StartChat buttons={aiWorkersButtons} selectedButton={selectedButton} />
    </div>
  );
};

export default AiWorker;
