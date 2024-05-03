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

    icons: ["repeat", "calendar", "team"],
  },
];

const pagesHeader = [
  {
    title: "Page Name & Description",
    key: "name",
  },
  {
    title: "Page Status",
    key: "status",
  },
  {
    title: "Relation to other pages",
    key: "relation",
  },
];

const pagesItems = [
  {
    title: "Automated Invoice receive",
    description: "Description comes here. Description comes here.  ",
    actionDescription:
      "Whenever email with Invoice as subject is received. Or attachment/body contains “Invoice” ",
    buttons: ["Add", "Delete"],
    icons: ["repeat"],
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
    icons: ["calendar"],
  },
];

const dashboardHeader = [
  {
    title: "Component Name & Type",
    key: "role",
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
    icons: ["repeat"],
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
  {
    title: "Add Access Point",
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
    accesspoint: "Add Gmail Access",
    icons: [],
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
