import React from "react";
import cn from "classnames";
import styles from "./TextInputCopy.module.sass";
import Icon from "../Icon";

const TextInputCopy = () => {
  return (
    <div style={{}} className={styles.warp}>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "10px",
            alignItems: "center",
          }}
          className={cn(styles.input)}
        >
          <div>wiyzard@wiyse.com</div>
          <div>
            <button className={cn("button-stroke", styles.copyButton)}>
              <Icon name="copy" size="24" />
              <span>Copy email</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextInputCopy;
