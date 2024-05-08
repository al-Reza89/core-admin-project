import React, { useContext, useState } from "react";
import styles from "./ExecutionWorkflow.module.sass";
import cn from "classnames";
import Dropdown from "../../components/Dropdown";
import { headerDropdownAtom } from "../../atoms/headerDropdownAtom";
import { useRecoilValue } from "recoil";
import NewMessageCard from "./NewMessageCard";
import Table from "./Table";
import { captureWorkflowContext } from "./workflowContext";
import CaptureWorkflowContextProvider from "./workflowContext";

const intervals = [
  "Last 24 hours",
  "Last 7 days",
  "Last 14 days",
  "Last 28 days",
  "Last 56 days",
];
const CaptureWorkflow = ({ title, showButton, foot, tableHeader, items }) => {
  const useHeaderDropdownActive = useRecoilValue(headerDropdownAtom);
  const { activeTab, setActiveTab } = useContext(captureWorkflowContext);
  const [sorting, setSorting] = useState(intervals[0]);
  const navigation = ["Active", "Deactive", "Draft"];

  console.log({ approval: items });

  return (
    <NewMessageCard
      className={styles.card}
      title={`${title}`}
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

const CaptureWorkflowWrapper = ({
  title,
  showButton,
  foot,
  tableHeader,
  items,
}) => {
  return (
    <CaptureWorkflowContextProvider>
      <CaptureWorkflow
        title={title}
        showButto={showButton}
        foot={foot}
        tableHeader={tableHeader}
        items={items}
      />
    </CaptureWorkflowContextProvider>
  );
};

export default CaptureWorkflowWrapper;
