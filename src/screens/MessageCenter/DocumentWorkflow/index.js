import React from "react";
import cn from "classnames";
import styles from "./DocumentWorkflow.module.sass";
import UploadDocument from "./UploadDocument";
import { useSteps } from "../../../context/StepContext";
import SetepWorkflow from "./SetupWorkflow";
import PreviewWorkflow from "./PreviewWorkflow";

const DocumentWorkflow = () => {
  const { currentStep, moveToNextStep } = useSteps();
  console.log("currentSteps", currentStep);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        paddingTop: currentStep === 1 ? "100px" : "0px",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          paddingRight: "60px",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: currentStep === 2 ? "fit-content" : "100%",
          }}
          className={cn(styles.message, {
            [styles.leftMessage]: true,
          })}
        >
          <div className={styles.messageContent}>
            <div className={styles.uploadFileDocument}>
              {currentStep === 1 && <UploadDocument />}
              {currentStep === 2 && <SetepWorkflow />}
              {currentStep === 3 && <PreviewWorkflow />}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://freelogopng.com/images/all_img/1681142503openai-icon-png.png"
              alt="User Avatar"
              className={styles.avatarLeft}
            />
            {currentStep === 2 && (
              <div onClick={moveToNextStep} className={styles.markLeft}>
                {"  "} Generate Steps
              </div>
            )}
            {currentStep === 3 && (
              <div>
                <div className={styles.markLeft}>{"  "} Start Preview</div>
                <div className={styles.markLeft2}>{"  "} Regenerage Steps</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentWorkflow;
