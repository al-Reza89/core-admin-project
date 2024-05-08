import React from "react";
import cn from "classnames";
import styles from "./ApproveDetails.module.sass";
import ChatApprovalWorkflowWrapper from "../../../ChatApprovalWorkflows";

const tableHeader = [
  {
    title: "Document",
    key: "name",
  },
  {
    title: "Vendor",
    key: "location",
  },
  {
    title: "Due Date",
    key: "action",
  },
  {
    title: "Go to App",
    key: "app",
  },
];

const items = [
  {
    id: 1,
    title: "Invoice #123",
    dueDate: "12/12/2021",
    vendor: "Vendor #1",
    link: "https://www.google.com",
  },
  {
    id: 2,
    title: "Invoice #124",
    dueDate: "12/12/2021",
    vendor: "Vendor #2",
    link: "https://www.google.com",
  },
];

const ApproveDetails = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div className={styles.paragraph}>
        Hi, 1 invoice (s) assigned to you. Your Approval is required.
      </div>
      <div
        style={{
          width: "100%",
          // backgroundColor: "#f5f5f5",
        }}
      >
        <ChatApprovalWorkflowWrapper
          title="Approval Required"
          showButton={false}
          foot={false}
          tableHeader={tableHeader}
          items={items}
        />
      </div>
    </div>
  );
};

export default ApproveDetails;
