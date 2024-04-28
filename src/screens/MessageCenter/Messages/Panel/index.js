import React from "react";
import styles from "./Panel.module.sass";
import cn from "classnames";
import Icon from "../../../../components/Icon";
import { AiOutlineHistory } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";

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
      <div
        style={{
          display: "flex",
          paddingRight: "20px",
          gap: "10px",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <button
          style={{
            height: "40px",
            padding: "0 20px",
          }}
          className={cn("button", styles.button)}
        >
          <span style={{}}>New Chat</span>
        </button>
        <div className={styles.file}>
          <FaHistory className={styles.historyIcon} />
        </div>
      </div>
    </div>
  );
};

export default Panel;
