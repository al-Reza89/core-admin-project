import React from "react";
import NewMessageWorkflowsWrapper from "../../../NewMessageWorkflows";
import WorkflowsWrapper from "../../../Workflows";

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
        width: "100%",
        // backgroundColor: "#f5f5f5",
      }}
    >
      {/* <NewMessageWorkflowsWrapper
        title="card title"
        showButton={false}
        foot={false}
        tableHeader={tableHeader}
        items={items}
      /> */}
      <NewMessageWorkflowsWrapper
        title="card title"
        showButton={false}
        foot={false}
        tableHeader={tableHeader}
      />
    </div>
  );
};

export default FinalizeAppWorkflow;
