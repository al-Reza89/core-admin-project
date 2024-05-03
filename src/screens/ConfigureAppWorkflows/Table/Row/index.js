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

const Row = ({ item, index, icons, buttons }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [visibleModalRunLimit, setVisibleModalRunLimit] = useState(false);
  const [visibleModalSchedule, setVisibleModalSchedule] = useState(false);
  const [visibleModalTeamAccess, setVisibleModalTeamAccess] = useState(false);
  const [visibleModalDeactivate, setVisibleModalDeactivate] = useState(false);
  const [visibleActions, setVisibleActions] = useState(false);

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
      title: "Team access",
      icon: "team",
      action: () => setVisibleModalTeamAccess(true),
    },
  ];

  const options = allOptions.filter((option) => icons.includes(option.icon));

  return (
    <>
      <div className={styles.row}>
        {/* <div className={styles.col}>{index + 1}</div> */}

        <div className={styles.col}>
          <div className={styles.item}>
            <div className={styles.details}>
              <div className={styles.product}>{item.title}</div>
              <div className={styles.wrap}>
                <div className={styles.category}>{item.description}</div>
              </div>
            </div>
          </div>
        </div>
        {item.location && (
          <div className={styles.col}>
            <Item className={styles.item} item={item.location} />
          </div>
        )}
        {item.actionDescription && (
          <div className={styles.col}>
            <div className={styles.item}>
              <div className={styles.details}>
                <div className={styles.wrap}>
                  {/* <div className={styles.price}>${item.run_schedule.title}</div> */}
                  <div className={styles.category}>
                    <ActionInput value={item.actionDescription} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {buttons && buttons.length > 0 && (
          <div className={styles.col}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {buttons.map((button, index) => (
                // <Item className={styles.item} item={button} />
                <button
                  style={{
                    backgroundColor: "#EFEFEF",
                    borderRadius: "6px",
                    fontWeight: "600",
                    padding: "6px",
                  }}
                  className={styles.button}
                  key={index}
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* <div className={styles.col}>
          <span className={cn("tasks_run")}>{item.tasks_run}</span>
        </div> */}
        {item.accesspoint && (
          <div className={styles.col}>
            <span
              style={{
                border: "1px solid #6F767E",
                padding: "5px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              {item.accesspoint}
            </span>
          </div>
        )}

        {icons && icons.length > 0 && (
          <div style={{}} className={styles.col}>
            <div
              style={{
                position: "relative",
                top: "35px",
              }}
            >
              <Control
                className={styles.control}
                visibleActions={visibleActions}
                setVisibleActions={setVisibleActions}
                options={options}
              />
            </div>
          </div>
        )}
      </div>
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
