import React from "react";
import styles from "./ConfigureApp.module.sass";
import cn from "classnames";
import ConfigureAppWorkfowsWrapper from "../../../ConfigureAppWorkflows";
import { useNavigationButton } from "../../../../context/NavigationContext";

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

    icons: ["repeat", "team"],
  },
];

const ConfigureApp = () => {
  const { activeButton } = useNavigationButton();

  let tableHeader = [];
  let items = [];

  if (activeButton === "Workflows") {
    tableHeader = workflowsHeader;
    items = workflowsItems;
  }

  return (
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
  );
};

export default ConfigureApp;
