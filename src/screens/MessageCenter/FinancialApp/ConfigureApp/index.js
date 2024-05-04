import React from "react";
import styles from "./ConfigureApp.module.sass";
import cn from "classnames";
import ConfigureAppWorkfowsWrapper from "../../../ConfigureAppWorkflows";
import { useNavigationButton } from "../../../../context/NavigationContext";

const navigation = [
  "Workflows",
  "Pages",
  "Actions",
  "Dashboard",
  "Integration",
];

const workflowsHeader = [
  {
    title: "Step Name & Description ",
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

const workflowsItems = [
  {
    title: "Automated Invoice receive",
    description: "Description comes here. Description comes here.  ",
    location: {
      color: "#EFEFEF",
      counter: "Gmail",
    },
    actionDescription:
      "Whenever email with Invoice as subject is received. Or attachment/body contains “Invoice” ",

    icons: ["add", "edit", "trash"],
  },
  {
    title: "Validate data against purchase orders and contracts",
    description:
      "Description comes here, Description comes here,Description comes here,",
    location: {
      color: "#EFEFEF",
      counter: "SAP",
    },
    actionDescription: "Check PO number and value from SAP ",

    icons: ["add", "edit", "trash"],
  },
  {
    title: "Route for approval based on pre-defined rules",
    description: "Description comes here. Description comes here.  ",
    location: {
      color: "#EFEFEF",
      counter: "Slack",
    },
    actionDescription: "Apr 12, 2021 at 12:55 PM",

    icons: ["add", "edit", "trash"],
  },
];

const pagesHeader = [
  {
    title: "Page Name & Description",
    key: "name",
  },
  {
    title: "Page Features",
    key: "feature",
  },
  {
    title: "Page Status",
    key: "status",
  },
];

const pagesItems = [
  {
    title: "Invoice List",
    description:
      "List view of all  invoices with details like Vendor name, amount, date of recieving, Approval status",
    buttons: ["Add Invoice", "Delete Invoice"],
    pageStatus: "Active",
    icons: ["edit"],
  },
  {
    title: "Invoice Details View",
    description:
      "Open invoice attachment, details of each invoice captured, extracted details, Approval history etc.",
    buttons: ["Add Invoice", "Delete Invoice"],
    pageStatus: "Deactive",
    icons: ["edit"],
  },
  {
    title: "Invoice List",
    description:
      "List view of all  invoices with details like Vendor name, amount, date of recieving, Approval status",
    buttons: ["Add Invoice", "Delete Invoice"],
    pageStatus: "Active",
    icons: ["edit"],
  },
];

const actionsHeader = [
  {
    title: "Role",
    key: "role",
  },
  {
    title: "Action",
    key: "action",
  },
];

const actionsItems = [
  {
    title: "User",
    description: "General user of application",

    bulletList: [
      "Download Invoices",
      "View & Edit invoice data and attachments.",
      "Request clarifications on rejected invoices.",
    ],
    icons: ["edit"],
  },
  {
    title: "Manager",
    description: "Description of manager",

    bulletList: [
      "Approve or reject invoices.",
      "All other privileges of “User” Role",
    ],
    icons: ["edit"],
  },
];

const dashboardHeader = [
  {
    title: "Component Name & Type",
    key: "role",
  },
  {
    title: "Type",
    key: "type",
  },
  {
    title: "Data",
    key: "action",
  },
  {
    title: "page Status",
    key: "status",
  },
];

const dashboardItems = [
  {
    title: "Workflow Overview Metrics",
    description:
      "Data: Metrics of  all key invoice workflow related data. Invoices received, Approved, Pending, Rejected",
    actionDescription: "Data chart ",
    buttons: ["Received", "Approved"],
    pageStatus: "Active",
    icons: ["edit"],
  },
  {
    title: "Invoice Volume",
    description:
      "Number of invoices processed over a chosen timeframe (e.g., Daily, Weekly, Monthly",
    actionDescription: "Bar chart ",
    buttons: ["Received", "Pending"],
    pageStatus: "Deactive",
    icons: ["edit"],
  },
  {
    title: "Workflow Overview Metrics",
    description:
      "Data: Metrics of  all key invoice workflow related data. Invoices received, Approved, Pending, Rejected",
    actionDescription: "pie chart ",
    buttons: ["Received", "Approved"],
    pageStatus: "Active",
    icons: ["edit"],
  },
];

const integrationHeader = [
  {
    title: "Step Name & Description ",
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

const integrationItems = [
  {
    title: "Automated Invoice receive",
    description: "Description comes here. Description comes here.  ",
    location: {
      color: "#EFEFEF",
      counter: "Gmail",
    },
    actionDescription:
      "Whenever email with Invoice as subject is received. Or attachment/body contains “Invoice” ",
    icons: ["edit"],
  },
  {
    title: "Validate data against purchase orders and contracts",
    description:
      "Description comes here, Description comes here,Description comes here,",
    location: {
      color: "#EFEFEF",
      counter: "SAP",
    },
    actionDescription: "Check PO number and value from SAP ",

    icons: ["edit"],
  },
  {
    title: "Route for approval based on pre-defined rules",
    description: "Description comes here. Description comes here.  ",
    location: {
      color: "#EFEFEF",
      counter: "Slack",
    },
    actionDescription: "Apr 12, 2021 at 12:55 PM",

    icons: ["edit"],
  },
];

const settingsHeader = [
  {
    title: "Setting Type",
    key: "type",
  },
  {
    title: "configure",
    key: "configure",
  },
  {
    title: "Description",
    key: "description",
  },
];

const settingsItems = [
  {
    title: "Brand Color",
    description: "Choose app color theme",
    button1: "primary",
    button2: "secondary",
    button1Description:
      "Default color used for majority of components like buttons, icons, headings, and other interactive or prominent UI elements  ",
    button2Description:
      "Secondary colors add visual interest and help differentiate various components within the design.",

    icons: [""],
  },
];

const ConfigureApp = () => {
  const { activeButton } = useNavigationButton();

  let tableHeader = [];
  let items = [];

  if (activeButton === "Workflows") {
    tableHeader = workflowsHeader;
    items = workflowsItems;
  } else if (activeButton === "Pages") {
    tableHeader = pagesHeader;
    items = pagesItems;
  } else if (activeButton === "Actions") {
    tableHeader = actionsHeader;
    items = actionsItems;
  } else if (activeButton === "Dashboard") {
    tableHeader = dashboardHeader;
    items = dashboardItems;
  } else if (activeButton === "Integration") {
    tableHeader = integrationHeader;
    items = integrationItems;
  } else if (activeButton === "Settings") {
    tableHeader = settingsHeader;
    items = settingsItems;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          // backgroundColor: "#f5f5f5",
        }}
      >
        <ConfigureAppWorkfowsWrapper
          title="Configure your App"
          showButton={true}
          foot={false}
          tableHeader={tableHeader}
          items={items}
        />
      </div>
    </div>
  );
};

export default ConfigureApp;
