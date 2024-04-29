import React from "react";
import styles from "./SetupWorkflow.module.sass";
import cn from "classnames";

const SetepWorkflow = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div className={styles.paragraph}>
        Describe your workflow in detail so I can help you build it.
      </div>
      <div>step 2</div>
    </div>
  );
};

export default SetepWorkflow;
