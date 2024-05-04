import React from "react";
import cn from "classnames";
import styles from "./RunLimit.module.sass";
// import Modal from "../../../components/Modal";
import TextInput from "../../../components/TextInput";
import ConfigureModal from "../../../components/ConfigureModal";

const ActionsRunLimit = ({ onClose, open, item }) => {
  return (
    <ConfigureModal onClose={onClose} visible={open}>
      <div className={styles.alertWrapper}>
        <div className={cn("title-primary", styles.title)}>User Actions</div>
        <div className={styles.note}>Configure Your App</div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "50%",
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
            </div>
            <div
              style={{
                width: "50%",
              }}
            >
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
          <div>
            <TextInput
              className={styles.field}
              label="Step Description"
              name="title"
              textarea={true}
              type="text"
              value={item.bulletList}
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

export default ActionsRunLimit;
