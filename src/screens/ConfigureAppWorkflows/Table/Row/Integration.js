import React from "react";
import styles from "./Row.module.sass";
import Control from "../../../../components/Control";
import Item from "../Item";
import cn from "classnames";

const Integration = ({
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
        <Item className={styles.item} item={item.location} />
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

export default Integration;
