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
import AddRunLimit from "../../AddRunLimit";

const Row = ({ item, index }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [visibleModalRunLimit, setVisibleModalRunLimit] = useState(false);
  const [visibleModalAddRunLimit, setVisibleModalAddRunLimit] = useState(false);
  const [visibleModalSchedule, setVisibleModalSchedule] = useState(false);
  const [visibleModalTeamAccess, setVisibleModalTeamAccess] = useState(false);
  const [visibleModalDeactivate, setVisibleModalDeactivate] = useState(false);
  const [visibleActions, setVisibleActions] = useState(false);
  const options = [
    // {
    //   title: "Tasks/Run",
    //   icon: "repeat",
    //   action: () => setVisibleModalRunLimit(true),
    // },
    // {
    //   title: "Schedule",
    //   icon: "calendar",
    //   action: () => setVisibleModalSchedule(true),
    // },
    // {
    //   title: 'Deactivate',
    //   icon: 'powerOff',
    //   action: () => setVisibleModalDeactivate(true),
    // },
    // {
    //   title: "Add",
    //   icon: "add",
    //   action: () => setVisibleModalAddRunLimit(true),
    // },
    // {
    //   title: "Edit title & description",
    //   icon: "edit",
    //   action: () => setVisibleModalRunLimit(true),
    // },
    // {
    //   title: "Delete forever",
    //   icon: "trash",
    //   action: () => setVisibleModalDeactivate(true),
    // },
  ];
  return (
    <>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.item}>
            <div className={styles.details}>
              {/* <div className={styles.product}>{item.title}</div> */}
              <div className={styles.wrap}>
                {/* <div className={styles.price}>${item.name.title}</div> */}
                <div className={styles.category}>{item.title}</div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.col}>
          <Item className={styles.item} item={item.location} />
        </div> */}

        <div className={styles.col}>
          <div className={styles.item}>
            <div className={styles.details}>
              {/* <div className={styles.product}>{item.run_schedule.title}</div> */}
              <div className={styles.wrap}>
                {/* <div className={styles.price}>${item.run_schedule.title}</div> */}
                <div className={styles.category}>
                  {/* <ActionInput value={item.action.description} /> */}
                  {item.vendor}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.item}>
            <div className={styles.details}>
              {/* <div className={styles.product}>{item.run_schedule.title}</div> */}
              <div className={styles.wrap}>
                {/* <div className={styles.price}>${item.run_schedule.title}</div> */}
                <div className={styles.category}>
                  {/* <ActionInput value={item.action.description} /> */}
                  {item.dueDate}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.item}>
            <div className={styles.details}>
              {/* <div className={styles.product}>{item.run_schedule.title}</div> */}
              <div className={styles.wrap}>
                {/* <div className={styles.price}>${item.run_schedule.title}</div> */}
                <div className={styles.category}>
                  {/* <ActionInput value={item.action.description} /> */}
                  {item.link}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.col}>
          <span className={cn("tasks_run")}>{item.tasks_run}</span>
        </div> */}

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
              // up={up}
              options={options}
            />
          </div>
        </div>
      </div>
      {/* <RunLimit
        open={visibleModalRunLimit}
        onClose={() => setVisibleModalRunLimit(false)}
        item={item}
      />

      <AddRunLimit
        open={visibleModalAddRunLimit}
        onClose={() => setVisibleModalAddRunLimit(false)}
        item={item}
      />

      <ActiveDeactivateAlert
        open={visibleModalDeactivate}
        onClose={() => setVisibleModalDeactivate(false)}
        item={item}
      /> */}

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
