import React from "react";
import styles from "./PreviewWorkflow.module.sass";
import Drafts from "../../../Drafts";

const PreviewWorkflow = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div className={styles.paragraph} style={{ whiteSpace: "pre-wrap" }}>
        <span> Now, let's dive into the details{"\n"}</span>
        <span
          style={{
            fontSize: "14px",
            paddingLeft: "2px",
          }}
        >
          Please provide me all details in each step so I can configure workflow
          across all your tools.{"\n"}
        </span>
        <span
          style={{
            fontSize: "14px",
            paddingLeft: "2px",
          }}
        >
          Feel free to add or change steps. Click on “Start Preview” once you
          are done.{" "}
        </span>
      </div>
      <Drafts isPanel={false} />
    </div>
  );
};

export default PreviewWorkflow;
