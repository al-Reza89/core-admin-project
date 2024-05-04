import React from "react";
import cn from "classnames";
import styles from "./RunLimit.module.sass";
// import Modal from "../../../components/Modal";
import TextInput from "../../../components/TextInput";
import ConfigureModal from "../../../components/ConfigureModal";

const WorkflowRunLimit = ({ onClose, open, item }) => {
  return (
    <ConfigureModal onClose={onClose} visible={open}>
      <div className={styles.alertWrapper}>
        <div className={cn("title-primary", styles.title)}>Workflows</div>
        <div className={styles.note}>Configure Your Apps</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <TextInput
              className={styles.field}
              label="Step Name "
              name="title"
              type="text"
              value={item.title}
              tooltip="Tasks per run"
              required
            />
            <TextInput
              className={styles.field}
              label="Step Description"
              name="title"
              type="text"
              value={item.title}
              tooltip="Tasks per run"
              required
            />
          </div>

          <TextInput
            className={styles.field}
            label="Destination"
            name="title"
            value={item.location.counter}
            type="text"
            tooltip="Tasks per run"
            required
          />
          <TextInput
            className={styles.field}
            label="Action Details"
            value={item.actionDescription}
            name="title"
            type="text"
            tooltip="Tasks per run"
            required
          />
        </div>

        <div className={styles.btns}>
          <button onClick={onClose} className={cn("button")}>
            <span>Rescheduble</span>
          </button>
        </div>
      </div>
    </ConfigureModal>
  );
};

export default WorkflowRunLimit;
