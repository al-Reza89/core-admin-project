import React from "react";
import cn from "classnames";
import styles from "./RunLimit.module.sass";
// import Modal from "../../../components/Modal";
import TextInput from "../../../components/TextInput";
import ConfigureModal from "../../../components/ConfigureModal";

const SettingsRunLimit = ({ onClose, open, title }) => {
  return (
    <ConfigureModal onClose={onClose} visible={open}>
      <div className={styles.alertWrapper}>
        <div className={cn("title-primary", styles.title)}>{title}</div>
        <div className={styles.note}>
          Set maximum task Run Limit for each run.
        </div>
        <TextInput
          className={styles.field}
          label="Tasks per run"
          name="title"
          type="number"
          tooltip="Tasks per run"
          required
        />
        <TextInput
          className={styles.field}
          label="Tasks per run"
          name="title"
          type="number"
          tooltip="Tasks per run"
          required
        />
        <div className={styles.btns}>
          <button onClick={onClose} className={cn("button")}>
            <span>Set Limit</span>
          </button>
        </div>
      </div>
    </ConfigureModal>
  );
};

export default SettingsRunLimit;
