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
        // <div className={styles.row}>
        //   {/* title and desc */}
        //   <div className={styles.col}>
        //     <div className={styles.item}>
        //       <div className={styles.details}>
        //         <div className={styles.product}>{item.title}</div>
        //         <div className={styles.wrap}>
        //           <div className={styles.category}>{item.description}</div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        //   {/* location */}
        //   <div className={styles.col}>
        //     <Item className={styles.item} item={item.location} />
        //   </div>
        //   {/* action descriptoin */}
        //   <div className={styles.col}>
        //     <div className={styles.item}>
        //       <div className={styles.details}>
        //         <div className={styles.wrap}>
        //           <div className={styles.category}>
        //             {item.actionDescription}
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        //   {/* icons */}
        //   {icons && icons.length > 0 && (
        //     <div style={{}} className={styles.col}>
        //       <div
        //         style={{
        //           position: "relative",
        //           top: "35px",
        //         }}
        //       >
        //         <Control
        //           className={styles.control}
        //           visibleActions={visibleActions}
        //           setVisibleActions={setVisibleActions}
        //           options={options}
        //         />
        //       </div>
        //     </div>
        //   )}
        // </div>
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
        <div className={styles.row}>
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
          <div className={styles.col}>
            <div className={styles.item}>
              <div className={styles.details}>
                <div className={styles.wrap}>
                  <div className={styles.category}>
                    <ActionInput value={item.actionDescription} />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      )}

      {activeButton === "Actions" && (
        <div className={styles.row}>
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
          {/* bullet list */}
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
      )}

      {activeButton === "Dashboard" && (
        <div className={styles.row}>
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
          <div className={styles.col}>
            <div className={styles.item}>
              <div className={styles.details}>
                <div className={styles.wrap}>
                  <div className={styles.category}>
                    <ActionInput value={item.actionDescription} />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      )}

      {activeButton === "Integration" && (
        <div className={styles.row}>
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
          <div className={styles.col}>
            <Item className={styles.item} item={item.location} />
          </div>
          <div className={styles.col}>
            <div className={styles.item}>
              <div className={styles.details}>
                <div className={styles.wrap}>
                  <div className={styles.category}>
                    <ActionInput value={item.actionDescription} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <button
              className={cn("button", styles.button)}
              style={{
                padding: "5px",
              }}
            >
              {item.accesspoint}
            </button>
          </div>
        </div>
      )}

      {activeButton === "Settings" && (
        <div className={styles.row}>
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
        </div>
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
