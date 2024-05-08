import React from "react";
import cn from "classnames";
import styles from "./DocumentDetails.module.sass";
import CaptureWorkflowWrapper from "../../../CaptureWorkflows";
import DocumentCaptureRun from "../../../DocumentCaptureRun";

const tableHeader = [
  {
    title: "Column A",
    key: "name",
  },
  {
    title: "Column B",
    key: "location",
  },
  {
    title: "Column C",
    key: "action",
  },
  {
    title: "Column D",
    key: "app",
  },
];

// const items = [
//   {
//     id: 1,
//     title: "Automated Invoice receive",
//     location: {
//       color: "#EFEFEF",
//       counter: "Gmail",
//     },
//     actionDescription:
//       "whenever email with Invoice as subject is received. Or attachment/body contains “Invoice”",
//     status: "Active",
//   },
//   {
//     id: 2,
//     title: "Automated Invoice receive",
//     location: {
//       color: "#EFEFEF",
//       counter: "Gmail",
//     },
//     actionDescription:
//       "whenever email with Invoice as subject is received. Or attachment/body contains “Invoice”",
//     status: "Deactive",
//   },
//   {
//     id: 3,
//     title: "Automated Invoice receive",
//     location: {
//       color: "#EFEFEF",
//       counter: "Gmail",
//     },
//     actionDescription:
//       "whenever email with Invoice as subject is received. Or attachment/body contains “Invoice”",
//     status: "Pending",
//   },
// ];

const items = [
  {
    id: 1,
    title: "Invoice #123",
    columnB: "XYZ",
    columnC: "08/12/2021",
    columnD: "02/12/2021",
  },
  {
    id: 2,
    title: "Invoice #124",
    columnB: "ABC",
    columnC: "08/12/2021",
    columnD: "02/12/2021",
  },
];

const DocumentDetails = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div className={styles.paragraph}>
        Hi, I have captured the following details from the document
      </div>
      <div
        style={{
          width: "100%",
          // backgroundColor: "#f5f5f5",
        }}
      >
        {/* <CaptureWorkflowWrapper
          title="Document Capture"
          showButton={false}
          foot={false}
          tableHeader={tableHeader}
          items={items}
        /> */}
        <DocumentCaptureRun footer={false} />
      </div>
    </div>
  );
};

export default DocumentDetails;
