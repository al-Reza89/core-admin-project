import React from "react";
import styles from "./Row.module.sass";
import Control from "../../../../components/Control";
import Item from "../Item";
import cn from "classnames";

const Integration = ({ item }) => {
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
  );
};

export default Integration;
