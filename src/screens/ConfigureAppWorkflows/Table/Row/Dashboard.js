import React from "react";
import styles from "./Row.module.sass";
import Control from "../../../../components/Control";
import Item from "../Item";

const Dashboard = ({
  item,
  icons,
  className,
  visibleActions,
  setVisibleActions,
  options,
  buttons,
}) => {
  return (
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
              <div className={styles.category}>{item.actionDescription}</div>
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
  );
};

export default Dashboard;
