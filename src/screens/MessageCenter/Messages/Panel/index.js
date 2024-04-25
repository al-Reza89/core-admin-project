import React from "react";
import styles from "./Panel.module.sass";

const Panel = ({ selectedUser }) => {
  return (
    <div className={styles.panel}>
      <div className={styles.line}>
        <img
          src="/images/content/avatar.jpg"
          alt="person"
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
        <div>
          <div className={styles.man}>{selectedUser.man}</div>
          <div className={styles.parameters}>
            <div className={styles.parameter}>{selectedUser.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
