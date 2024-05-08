import React, { useState } from "react";
import cn from "classnames";
import styles from "./RunLimit.module.sass";
import TextInput from "../../../components/TextInput";
import ConfigureModal from "../../../components/ConfigureModal";
import { useItems } from "../../../context/WorkflowContext";

const RunLimit = ({ onClose, open, item }) => {
  // console.log("itemId", item.id);

  const { dispatch } = useItems();
  const [editedItem, setEditedItem] = useState(item);

  const handleChange = (value, name) => {
    console.log("value", value);
    console.log("name", name);
    if (name === "counter") {
      setEditedItem((prevItem) => ({
        ...prevItem,
        location: {
          ...prevItem.location,
          [name]: value,
        },
      }));
    } else {
      setEditedItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    }

    console.log("editedItem", editedItem);
  };

  const handleSave = () => {
    dispatch({
      type: "UPDATE_ITEM",
      payload: { id: item.id, update: editedItem },
    });
    onClose();
  };

  return (
    <ConfigureModal onClose={onClose} visible={open}>
      <div className={styles.alertWrapper}>
        <div className={cn("title-primary", styles.title)}>Edit Step</div>
        <div className={styles.note}></div>
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
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
            }}
          >
            <div className={styles.paragraph}>Add Step Name</div>
            <div>
              <TextInput
                className={styles.field}
                label="Step Name "
                name="title"
                handleChange={handleChange}
                textarea={true}
                type="text"
                value={item.title}
                tooltip="Tasks per run"
                required
              />
            </div>
          </div>
          <div className={styles.border}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div className={styles.paragraph}>Add Platform URL</div>
              <div>
                <TextInput
                  className={styles.field}
                  label="Destination"
                  name="counter"
                  textarea={true}
                  handleChange={handleChange}
                  value={item.location.counter}
                  type="text"
                  tooltip="Tasks per run"
                  required
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div className={styles.paragraph}>Add Access Login</div>
              <div>
                <TextInput
                  className={styles.field}
                  label="Email/API Key"
                  name="email"
                  textarea={true}
                  value={""}
                  type="text"
                  tooltip="Tasks per run"
                  required
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <TextInput
                  className={styles.field}
                  label="Password"
                  textarea={true}
                  name="password"
                  value={""}
                  type="Password"
                  tooltip="Tasks per run"
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles.border}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
            }}
          >
            <div className={styles.paragraph}>Add actions to be done</div>
            <div>
              <TextInput
                className={styles.field}
                label="Action Details"
                textarea={true}
                value={item.actionDescription}
                name="actionDescription"
                handleChange={handleChange}
                type="text"
                tooltip="Tasks per run"
                required
              />
            </div>
          </div>
        </div>

        <div className={styles.btns}>
          <button onClick={handleSave} className={cn("button")}>
            <span>Save</span>
          </button>
        </div>
      </div>
    </ConfigureModal>
  );
};

export default RunLimit;
