import React from "react";
import cn from "classnames";
import styles from "./RunLimit.module.sass";
// import Modal from "../../../components/Modal";
import TextInput from "../../../components/TextInput";
import ConfigureModal from "../../../components/ConfigureModal";

const IntegrationsRunLimit = ({ onClose, open, item }) => {
  return (
    <ConfigureModal onClose={onClose} visible={open}>
      <div className={styles.alertWrapper}>
        <div className={cn("title-primary", styles.title)}>Integration</div>
        <div className={styles.note}>Configure Your App</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              width: "100%",
            }}
          >
            <div style={{}}>
              <TextInput
                className={styles.field}
                label="Step Name "
                name="title"
                type="text"
                textarea={true}
                value={item.title}
                tooltip="Tasks per run"
                required
              />
            </div>
            <div style={{}}>
              <TextInput
                className={styles.field}
                label="Step Description"
                name="title"
                textarea={true}
                type="text"
                value={item.description}
                tooltip="Tasks per run"
                required
              />
            </div>
          </div>

          <div
            style={{
              width: "100%",
            }}
          >
            <TextInput
              className={styles.field}
              label="Destination"
              name="title"
              textarea={true}
              value={item.location.counter}
              type="text"
              tooltip="Tasks per run"
              required
            />
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            <TextInput
              className={styles.field}
              label="Action Details"
              textarea={true}
              value={item.actionDescription}
              name="title"
              type="text"
              tooltip="Tasks per run"
              required
            />
          </div>
        </div>
        <div className={styles.btns}>
          <button onClick={onClose} className={cn("button")}>
            <span>Reschedule</span>
          </button>
        </div>
      </div>
    </ConfigureModal>
  );
};

export default IntegrationsRunLimit;
