import React, { useState } from "react";
import cn from "classnames";
import styles from "./Filters.module.sass";
import Icon from "../Icon";
import { FaHistory } from "react-icons/fa";

const Filters = ({ className, children, title, customeIcon }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={cn(styles.filters, className, { [styles.active]: visible })}
    >
      {customeIcon ? (
        <div className={styles.file} onClick={() => setVisible(true)}>
          <FaHistory className={styles.historyIcon} />
        </div>
      ) : (
        <button
          className={cn("button-square-stroke button-small", styles.head)}
          onClick={() => setVisible(true)}
        >
          <Icon name="filter" size="24" />
        </button>
      )}

      <div className={styles.body}>
        <div className={styles.top}>
          <div className={cn("title-red", styles.title)}>{title}</div>
          <button className={styles.close} onClick={() => setVisible(false)}>
            <Icon name="close" size="20" />
          </button>
        </div>
        {children}
      </div>
      <div className={styles.overlay} onClick={() => setVisible(false)}></div>
    </div>
  );
};

export default Filters;
