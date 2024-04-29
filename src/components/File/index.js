import React from "react";
import cn from "classnames";
import styles from "./File.module.sass";
import Icon from "../Icon";
import Tooltip from "../Tooltip";
import { useSteps } from "../../context/StepContext";

const File = ({ className, label, tooltip, title }) => {
  const { moveToNextStep, handleFileUpload, currentStep } = useSteps();

  const handleFile = (event) => {
    const file = event.target.files[0];
    console.log("file", file);
    if (file) {
      handleFileUpload(file.name);
      moveToNextStep();
      console.log("current-Step", currentStep);
    }
  };

  return (
    <div className={cn(styles.file, className)}>
      {label && (
        <div className={styles.label}>
          {label}{" "}
          {tooltip && (
            <Tooltip
              className={styles.tooltip}
              title={tooltip}
              icon="info"
              place="right"
            />
          )}
        </div>
      )}
      <div className={styles.wrap}>
        <input className={styles.input} type="file" onChange={handleFile} />
        <div className={styles.box}>
          <Icon name="upload" size="24" />
          {title}
        </div>
      </div>
    </div>
  );
};

export default File;
