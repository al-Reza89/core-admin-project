import React, { useState } from "react";
import cn from "classnames";
import styles from "./TextInputDropdown.module.sass";
import Icon from "../Icon";
import Dropdown from "../Dropdown";
import DropdownText from "../DropdownText";

const optionSource = ["Admin", "User", "Manager"];

const TextInputDropdown = () => {
  const [source, setSource] = useState(optionSource[0]);

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
          <input
            className={styles.mainInput}
            type="text"
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              width: "100%",
              fontSize: "16px",
              fontWeight: "500",
            }}
          />
          <div>
            <DropdownText
              value={source}
              setValue={setSource}
              options={optionSource}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextInputDropdown;
