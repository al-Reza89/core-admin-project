import React, { useContext, useState } from "react";
import styles from "./NewMessageWorkflows.module.sass";
import cn from "classnames";
import Dropdown from "../../components/Dropdown";
import { headerDropdownAtom } from "../../atoms/headerDropdownAtom";
import { useRecoilValue } from "recoil";
import Table from "./Table";
import ConfigureAppWorkflowsContextProvider, {
  configureAppWorkflowsContext,
} from "./workflowContext";
import { useNavigationButton } from "../../context/NavigationContext";
import NewMessageCard from "./NewMessageCard";

const intervals = [
  "Last 24 hours",
  "Last 7 days",
  "Last 14 days",
  "Last 28 days",
  "Last 56 days",
];
const ConfigureAppWorkflows = ({
  title,
  showButton,
  foot,
  tableHeader,
  items,
}) => {
  const { activeButton, setActive } = useNavigationButton();
  const useHeaderDropdownActive = useRecoilValue(headerDropdownAtom);
  const { activeTab, setActiveTab } = useContext(configureAppWorkflowsContext);
  const [sorting, setSorting] = useState(intervals[0]);
  const navigation = [
    "Workflows",
    "Pages",
    "Actions",
    "Dashboard",
    "Integration",
    "Settings",
  ];

  return (
    <NewMessageCard
      className={styles.card}
      title={`${title}`}
      classTitle="title-primary"
      head={
        <>
          <div className={cn(styles.nav, "mobile-hide")}>
            {navigation.map((x, index) => (
              <button
                style={{
                  fontSize: "15px",
                  padding: "8px 16px",
                  fontWeight: "bold",
                }}
                className={cn(styles.link, {
                  [styles.active]: x === activeButton,
                })}
                onClick={() => setActive(x)}
                key={index}
              >
                {x}
              </button>
            ))}
          </div>
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

const ConfigureAppWorkfowsWrapper = ({
  title,
  showButton,
  foot,
  tableHeader,
  items,
}) => {
  return (
    <ConfigureAppWorkflowsContextProvider>
      <ConfigureAppWorkflows
        title={title}
        showButto={showButton}
        foot={foot}
        tableHeader={tableHeader}
        items={items}
      />
    </ConfigureAppWorkflowsContextProvider>
  );
};

export default ConfigureAppWorkfowsWrapper;
