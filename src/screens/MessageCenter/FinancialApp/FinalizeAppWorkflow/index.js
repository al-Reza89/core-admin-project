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

const items = [
  {
    title: "Shop Name & Description",
    description: "Description is goes here",
    value: "Weekly",
    location: "Monday, 09:00 AM, PST",
    button1: "Add Step Below",
    button2: "Delete",
  },
  {
    title: "Shop Name & Description",
    description: "Description is goes here",
    value: "Weekly",
    location: "Monday, 09:00 AM, PST",
    button1: "Add Step Below",
    button2: "Delete",
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
