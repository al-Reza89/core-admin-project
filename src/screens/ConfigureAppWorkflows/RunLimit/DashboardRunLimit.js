import React, { useState } from "react";
import cn from "classnames";
import styles from "./RunLimit.module.sass";
// import Modal from "../../../components/Modal";
import TextInput from "../../../components/TextInput";
import ConfigureModal from "../../../components/ConfigureModal";

const DashboardRunLimit = ({ onClose, open, item }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleState = () => {
    setIsActive(!isActive);
  };

  return (
    <ConfigureModal onClose={onClose} visible={open}>
      <div className={styles.alertWrapper}>
        <div className={cn("title-primary", styles.title)}>Dashboard</div>
        <div className={styles.note}>Configure Your App</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "20px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                width: "100%",
              }}
            >
              <div
                style={{
                  width: "100%",
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
              <div>
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
                label="Step Name "
                name="title"
                type="text"
                value={item.actionDescription}
                tooltip="Tasks per run"
                required
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                width: "30%",
              }}
            >
              <div>Page Status</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span>Active</span>
                <div
                  onClick={toggleState}
                  style={{
                    width: "40px",
                    height: "20px",
                    borderRadius: "30px",
                    backgroundColor: isActive ? "#A855F7" : "#A855F7",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    padding: "2px",
                  }}
                >
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      backgroundColor: isActive ? "#fff" : "#fff",
                      transition: "transform 0.3s",
                      transform: isActive
                        ? "translateX(20px)"
                        : "translateX(0)",
                    }}
                  ></div>
                </div>
                <span>Inactive</span>
              </div>
            </div>
          </div>
          <div>button</div>
        </div>
        <div className={styles.btns}>
          <button className={cn("button")}>
            <span>Set Limit</span>
          </button>
        </div>
      </div>
    </ConfigureModal>
  );
};

export default DashboardRunLimit;
