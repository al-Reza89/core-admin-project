import React, { useContext, useState } from "react";
import styles from "./NewMessageWorkflows.module.sass";
import cn from "classnames";
import Dropdown from "../../components/Dropdown";
import { headerDropdownAtom } from "../../atoms/headerDropdownAtom";
import { useRecoilValue } from "recoil";
import { newMessageWorkflowContext } from "./workflowContext";
import NewMessageWorkflowContextProvider from "./workflowContext";
import NewMessageCard from "./NewMessageCard";
import Table from "./Table";

const items = [
  {
    name: {
      title: "Automated Invoice receive",
      description: "Description comes here. Description comes here.  ",
    },
    action: {
      title: "Weekly",
      description:
        "Whenever email with Invoice as subject is received. Or attachment/body contains “Invoice” ",
    },
    location: {
      color: "#EFEFEF",
      counter: "Gmail",
    },
  },
  {
    name: {
      title: "Automated Invoice receive",
      description: "Description comes here. Description comes here.  ",
    },
    action: {
      title: "Weekly",
      description:
        "Whenever email with Invoice as subject is received. Or attachment/body contains “Invoice” ",
    },
    location: {
      color: "#EFEFEF",
      counter: "Gmail",
    },
  },
  {
    name: {
      title: "Automated Invoice receive",
      description: "Description comes here. Description comes here.  ",
    },
    action: {
      title: "Weekly",
      description:
        "Whenever email with Invoice as subject is received. Or attachment/body contains “Invoice” ",
    },
    location: {
      color: "#EFEFEF",
      counter: "Gmail",
    },
  },
];
const intervals = [
  "Last 24 hours",
  "Last 7 days",
  "Last 14 days",
  "Last 28 days",
  "Last 56 days",
];
const NewMessageWorkflows = ({ title, showButton, foot, tableHeader }) => {
  const useHeaderDropdownActive = useRecoilValue(headerDropdownAtom);
  const { activeTab, setActiveTab } = useContext(newMessageWorkflowContext);
  const [sorting, setSorting] = useState(intervals[0]);
  const navigation = ["Active", "Deactive", "Draft"];

  return (
    <NewMessageCard
      className={styles.card}
      title={`${title} Workflows`}
      classTitle="title-primary"
      head={
        <>
          {/* <Dropdown
            className={styles.dropdown}
            classDropdownHead={styles.dropdownHead}
            value={sorting}
            setValue={setSorting}
            options={intervals}
            small
          /> */}
          {showButton && (
            <div className={cn(styles.nav, "mobile-hide")}>
              {navigation.map((x, index) => (
                <button
                  style={{
                    fontSize: "15px",
                    padding: "8px 16px",
                    fontWeight: "bold",
                  }}
                  className={cn(
                    x === "Active" && activeTab === "Active"
                      ? "status-green"
                      : x === "Deactive" && activeTab === "Deactive"
                      ? "status-red"
                      : styles.link,
                    {
                      [styles.active]: x === activeTab,
                    }
                  )}
                  onClick={() => setActiveTab(x)}
                  key={index}
                >
                  {x}
                </button>
              ))}
            </div>
          )}
        </>
      }
    >
      {/* <div className={cn(styles.nav, "mobile-show")}>
        {navigation.map((x, index) => (
          <button
            className={cn(
              x === "Active"
                ? "status-green"
                : x === "Deactive"
                ? "status-red"
                : styles.link,
              {
                [styles.active]: x === activeTab,
              }
            )}
            onClick={() => setActiveTab(x)}
            key={index}
          >
            {x}
          </button>
        ))}
      </div> */}
      <Table items={items} foot={foot} tableHeader={tableHeader} />
    </NewMessageCard>
  );
};

const NewMessageWorkflowsWrapper = ({
  title,
  showButton,
  foot,
  tableHeader,
}) => {
  return (
    <NewMessageWorkflowContextProvider>
      <NewMessageWorkflows
        title={title}
        showButto={showButton}
        foot={foot}
        tableHeader={tableHeader}
      />
    </NewMessageWorkflowContextProvider>
  );
};

export default NewMessageWorkflowsWrapper;
