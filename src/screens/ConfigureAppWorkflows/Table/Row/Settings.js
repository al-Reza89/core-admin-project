import React from "react";
import styles from "./Row.module.sass";
import Control from "../../../../components/Control";
import cn from "classnames";

const Settings = ({
  item,
  icons,
  className,
  visibleActions,
  setVisibleActions,
  options,
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
              }}
              className={styles.product}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    maxWidth: "200px",
                    width: "90px",
                  }}
                  className={cn(styles.head)}
                >
                  <div className={styles.value}>{item.button1}</div>
                  {/* color box */}
                </button>
              </div>
              <div>
                <button
                  style={{
                    maxWidth: "200px",
                    width: "90px",
                  }}
                  className={cn(styles.head)}
                >
                  <div className={styles.value}>{item.button2}</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexDirection: "column",
          }}
        >
          <div className={styles.category}>{item.button1Description}</div>
          <div className={styles.category}>{item.button2Description}</div>
        </div>
      </div>

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

export default Settings;
