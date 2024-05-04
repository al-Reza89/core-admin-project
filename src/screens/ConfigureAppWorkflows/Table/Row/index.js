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

const Row = ({ item, index, icons, buttons }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [visibleModalRunLimit, setVisibleModalRunLimit] = useState(false);
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
      action: () => setVisibleModalRunLimit(true),
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
      action: () => setVisibleModalRunLimit(true),
    },
    {
      title: "Edit title & description",
      icon: "edit",
      action: () => console.log("Edit title & description"),
    },
    {
      title: "Delete forever",
      icon: "trash",
      action: () => console.log("Delete forever"),
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
      <RunLimit
        open={visibleModalRunLimit}
        onClose={() => setVisibleModalRunLimit(false)}
      />

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
