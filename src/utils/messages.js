import ApproveDetails from "../screens/MessageCenter/ChatAprovals/ApproveDeatils";
import DocumentDetails from "../screens/MessageCenter/DocumentCapture/DocumentDetails";
import UploadDocument from "../screens/MessageCenter/DocumentWorkflow/UploadDocument";
import ExecutionDetails from "../screens/MessageCenter/ExecutingSteps/ExecutionDetails";
import Questions from "../screens/MessageCenter/FinancialApp/Questions";

export const messages = [
  {
    id: 1,
    text: "Describe your application workflow in detail so I can help you build it.",
    time: "12:00",
    user: "user1",
  },
  {
    id: 2,
    text: "Inventory Management tool for ecommerce with Shopify.",
    time: "12:02",
    user: "user2",
  },
  {
    id: 3,
    text: (
      <div>
        <Questions />
      </div>
    ),
    button: "Generate Workflow",
    time: "12:02",
    user: "user1",
  },
];

export const adminMessages = [
  {
    id: 1,
    time: "10:10",
    text: (
      <div>
        <UploadDocument />
      </div>
    ),
    button: "Upload Document",
    user: "user1",
  },
];

export const chatApprovalsMessages = [
  {
    id: 1,
    text: (
      <div>
        <ApproveDetails />
      </div>
    ),
    time: "12:00",
    user: "user1",
    button: "Preview app UI",
  },
];

export const executingStepsMessages = [
  {
    id: 1,
    text: (
      <div>
        <ExecutionDetails />
      </div>
    ),
    time: "12:00",
    user: "user1",
    button: "Preview app UI",
  },
];

export const documentCaptureMessages = [
  {
    id: 1,
    text: (
      <div>
        <DocumentDetails />
      </div>
    ),
    time: "12:00",
    user: "user1",
    button: "Preview app UI",
  },
];
