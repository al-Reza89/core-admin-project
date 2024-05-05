import React, { useState } from "react";
import cn from "classnames";
import styles from "./Row.module.sass";
import Item from "../Item";
import Control from "../../../../components/Control";
import Modal from "../../../../components/Modal";
import Schedule from "../Schedule";
import TeamAccess from "../../TeamAccess";
import ActiveDeactivateAlert from "../../ActiveDeactivateAlert";
import RunLimit from "../../RunLimit";
import ActionInput from "../ActionInput";
import { useNavigationButton } from "../../../../context/NavigationContext";
import Workflow from "./Workflow";
import Pages from "./Pages";
import Actions from "./Actions";
import Dashboard from "./Dashboard";
import Integration from "./Integration";
import Settings from "./Settings";
import WorkflowRunLimit from "../../RunLimit/WorkflowRunLimit";
import PagesRunLimit from "../../RunLimit/PagesRunLimit";
import ActionsRunLimit from "../../RunLimit/ActionsRunLimit";
import DashboardRunLimit from "../../RunLimit/DashboardRunLimit";
import IntegrationsRunLimit from "../../RunLimit/IntegrationsRunLimit";
import SettingsRunLimit from "../../RunLimit/SettingsRunLimit";
import WorkflowAddRunLimit from "../../RunLimit/WorkflowAddRunLimit";
import WorkflowDeleteRunLimit from "../../RunLimit/WorkflowDeleteRunLimit";

const Row = ({ item, index, icons, buttons }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [visibleModalRunLimit, setVisibleModalRunLimit] = useState(false);
  const [visibleModalAddRunLimit, setVisibleModalAddRunLimit] = useState(false);
  const [visibleModalDeleteRunLimit, setVisibleModalDeleteRunLimit] =
    useState(false);
  const [visibleModalSchedule, setVisibleModalSchedule] = useState(false);
  const [visibleModalTeamAccess, setVisibleModalTeamAccess] = useState(false);
  const [visibleModalDeactivate, setVisibleModalDeactivate] = useState(false);
  const [visibleActions, setVisibleActions] = useState(false);

  const { activeButton } = useNavigationButton();

  console.log(buttons);

  const allOptions = [
    {
      title: "Tasks/Run",
      icon: "repeat",
      action: () => setVisibleModalSchedule(true),
    },
    {
      title: "Schedule",
      icon: "calendar",
      action: () => setVisibleModalSchedule(true),
    },
    {
      title: "Deactivate",
      icon: "powerOff",
      action: () => setVisibleModalDeactivate(true),
    },
    {
      title: "Add",
      icon: "add",
      action: () => setVisibleModalAddRunLimit(true),
    },
    {
      title: "Edit title & description",
      icon: "edit",
      action: () => setVisibleModalRunLimit(true),
    },
    {
      title: "Delete forever",
      icon: "trash",
      action: () => setVisibleModalDeleteRunLimit(true),
    },
  ];

  const options = allOptions.filter((option) => icons.includes(option.icon));

  return (
    <>
      {activeButton === "Workflows" && (
        <Workflow
          item={item}
          icons={icons}
          className={styles.control}
          visibleActions={visibleActions}
          setVisibleActions={setVisibleActions}
          options={options}
        />
      )}
      {activeButton === "Pages" && (
        <Pages
          item={item}
          buttons={buttons}
          icons={icons}
          className={styles.control}
          setVisibleActions={setVisibleActions}
          visibleActions={visibleActions}
          options={options}
        />
      )}

      {activeButton === "Actions" && (
        <Actions
          item={item}
          icons={icons}
          className={styles.control}
          visibleActions={visibleActions}
          setVisibleActions={setVisibleActions}
          options={options}
        />
      )}

      {activeButton === "Dashboard" && (
        <Dashboard
          item={item}
          icons={icons}
          className={styles.control}
          visibleActions={visibleActions}
          setVisibleActions={setVisibleActions}
          options={options}
          buttons={buttons}
        />
      )}

      {activeButton === "Integration" && (
        <Integration
          item={item}
          icons={icons}
          className={styles.control}
          visibleActions={visibleActions}
          setVisibleActions={setVisibleActions}
          options={options}
        />
      )}

      {activeButton === "Settings" && (
        <Settings
          item={item}
          icons={icons}
          className={styles.control}
          visibleActions={visibleActions}
          setVisibleActions={setVisibleActions}
          options={options}
        />
      )}

      {activeButton === "Workflows" && (
        <WorkflowRunLimit
          open={visibleModalRunLimit}
          onClose={() => setVisibleModalRunLimit(false)}
          item={item}
        />
      )}

      {activeButton === "Workflows" && (
        <WorkflowAddRunLimit
          open={visibleModalAddRunLimit}
          onClose={() => setVisibleModalAddRunLimit(false)}
        />
      )}

      {activeButton === "Workflows" && (
        <WorkflowDeleteRunLimit
          open={visibleModalDeleteRunLimit}
          onClose={() => setVisibleModalDeleteRunLimit(false)}
        />
      )}

      {activeButton === "Pages" && (
        <PagesRunLimit
          open={visibleModalRunLimit}
          onClose={() => setVisibleModalRunLimit(false)}
          item={item}
        />
      )}
      {activeButton === "Actions" && (
        <ActionsRunLimit
          open={visibleModalRunLimit}
          onClose={() => setVisibleModalRunLimit(false)}
          item={item}
        />
      )}
      {activeButton === "Dashboard" && (
        <DashboardRunLimit
          open={visibleModalRunLimit}
          onClose={() => setVisibleModalRunLimit(false)}
          item={item}
        />
      )}
      {activeButton === "Integration" && (
        <IntegrationsRunLimit
          open={visibleModalRunLimit}
          onClose={() => setVisibleModalRunLimit(false)}
          item={item}
        />
      )}
      {activeButton === "Settings" && (
        <SettingsRunLimit
          open={visibleModalRunLimit}
          onClose={() => setVisibleModalRunLimit(false)}
          title={activeButton}
        />
      )}

      <ActiveDeactivateAlert
        open={visibleModalDeactivate}
        onClose={() => setVisibleModalDeactivate(false)}
      />

      <Modal
        visible={visibleModalTeamAccess}
        outerClassName={styles.teamAccessModalWidth}
        onClose={() => setVisibleModalTeamAccess(false)}
      >
        <TeamAccess onClose={() => setVisibleModalTeamAccess(false)} />
      </Modal>
      <Modal
        visible={visibleModalSchedule}
        onClose={() => setVisibleModalSchedule(false)}
      >
        <Schedule
          startDate={startDate}
          setStartDate={setStartDate}
          startTime={startTime}
          setStartTime={setStartTime}
        />
      </Modal>
    </>
  );
};

export default Row;
