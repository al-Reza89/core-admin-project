import React from "react";
import styles from "./TableValue.module.sass";
import cn from "classnames";

const TableValue = ({ item }) => {
  return (
    <div className={styles.container} style={{}}>
      <div style={{}} className={styles.wrapper}>
        <div className={styles.descContainer}>
          <div>
            <div className={styles.descTitle}>{item.title}</div>
            <div className={styles.desc}>{item.description}</div>
          </div>
        </div>
        <div className={styles.value}>
          <div>{item.value}</div>
        </div>
        <div className={styles.action}>
          <div className={styles.location}>{item.location}</div>
          <div className={styles.hiddenButton}>
            <button className={styles.button1}>{item.button1}</button>
            <button className={styles.button2}>{item.button2}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableValue;
