import React from "react";
import cn from "classnames";
import styles from "./ExecutionDetails.module.sass";
import ExecutionWorkflowWrapper from "../../../ExecutionWorkflows";

const tableHeader = [
  {
    title: "Step",
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
  {
    title: "Status",
    key: "app",
  },
];

const items = [
  {
    id: 1,
    title: "Automated Invoice receive",
    location: {
      color: "#EFEFEF",
      counter: "Gmail",
    },
    actionDescription:
      "whenever email with Invoice as subject is received. Or attachment/body contains “Invoice”",
    status: "Active",
  },
  {
    id: 2,
    title: "Automated Invoice receive",
    location: {
      color: "#EFEFEF",
      counter: "Gmail",
    },
    actionDescription:
      "whenever email with Invoice as subject is received. Or attachment/body contains “Invoice”",
    status: "Deactive",
  },
  {
    id: 3,
    title: "Automated Invoice receive",
    location: {
      color: "#EFEFEF",
      counter: "Gmail",
    },
    actionDescription:
      "whenever email with Invoice as subject is received. Or attachment/body contains “Invoice”",
    status: "Pending",
  },
];

const ExecutionDetails = () => {
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
        <ExecutionWorkflowWrapper
          title="Executing Steps"
          showButton={false}
          foot={false}
          tableHeader={tableHeader}
          items={items}
        />
      </div>
    </div>
  );
};

export default ExecutionDetails;
