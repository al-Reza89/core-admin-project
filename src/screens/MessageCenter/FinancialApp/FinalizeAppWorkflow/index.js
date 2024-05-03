import React from "react";
import NewMessageWorkflowsWrapper from "../../../NewMessageWorkflows";
import styles from "./FinalizeAppWorkflow.module.sass";

const tableHeader = [
  {
    title: "Shop Name & Description",
    key: "name",
  },
  {
    title: "Location",
    key: "location",
  },
  {
    title: "Action details",
    key: "action",
  },
];

const FinalizeAppWorkflow = () => {
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
      <div
        style={{
          width: "100%",
          // backgroundColor: "#f5f5f5",
        }}
      >
        <NewMessageWorkflowsWrapper
          title="Finalize app"
          showButton={false}
          foot={false}
          tableHeader={tableHeader}
        />
      </div>
    </div>
  );
};

export default FinalizeAppWorkflow;
