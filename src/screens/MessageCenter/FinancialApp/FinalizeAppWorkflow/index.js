import React from "react";
import NewMessageWorkflowsWrapper from "../../../NewMessageWorkflows";
import styles from "./FinalizeAppWorkflow.module.sass";
import { useItems } from "../../../../context/WorkflowContext";

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

const items = [
  {
    id: 1,
    title: "Automated Invoice receive",
    description: "Description comes here. Description comes here.  ",
    location: {
      color: "#EFEFEF",
      counter: "Gmail",
    },
    actionDescription:
      "whenever email with Invoice as subject is received. Or attachment/body contains “Invoice”",
  },
  {
    id: 2,
    title: "Automated Invoice receive",
    description: "Description comes here. Description comes here.  ",
    location: {
      color: "#EFEFEF",
      counter: "Gmail",
    },
    actionDescription:
      "whenever email with Invoice as subject is received. Or attachment/body contains “Invoice”",
  },
  {
    id: 3,
    title: "Automated Invoice receive",
    description: "Description comes here. Description comes here.  ",
    location: {
      color: "#EFEFEF",
      counter: "Gmail",
    },
    actionDescription:
      "whenever email with Invoice as subject is received. Or attachment/body contains “Invoice”",
  },
];

const FinalizeAppWorkflow = () => {
  const { state } = useItems();

  console.log({ state: state });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div className={styles.paragraph}>
        Okay, now help me finalize the workflow steps so I can build the
        application UI & backend.
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
          items={state.items}
        />
      </div>
    </div>
  );
};

export default FinalizeAppWorkflow;
