import React, { useState } from "react";
import cn from "classnames";
import styles from "./AddRunLimit.module.sass";
import ConfigureModal from "../../../components/ConfigureModal";
import TextInput from "../../../components/TextInput";
import { useItems } from "../../../context/WorkflowContext";

const AddRunLimit = ({ onClose, open, item }) => {
  console.log("itemId", item.id);
  const { dispatch } = useItems();
  const [addItem, setAddItem] = useState({
    id: Date.now(),
    title: "",
    description: "",
    location: {
      color: "#EFEFEF",
      counter: "",
    },
    actionDescription: "",
  });

  const handleChange = (value, name) => {
    if (name === "counter") {
      setAddItem((prevItem) => ({
        ...prevItem,
        location: {
          ...prevItem.location,
          [name]: value,
        },
      }));
    } else {
      setAddItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    }
  };

  const handleSave = () => {
    dispatch({ type: "ADD_ITEM", payload: { item: addItem } });
    onClose();
  };
  return (
    <ConfigureModal onClose={onClose} visible={open}>
      <div className={styles.alertWrapper}>
        <div className={cn("title-primary", styles.title)}>Workflows</div>
        <div className={styles.note}></div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "30px",
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
            <div>Add Step Name</div>
            <div>
              <TextInput
                className={styles.field}
                label="Step Name "
                name="title"
                textarea={true}
                handleChange={handleChange}
                type="text"
                value={addItem.title}
                tooltip="Tasks per run"
                required
              />
            </div>
          </div>

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
              <div>Add Platform URL</div>
              <div>
                <TextInput
                  className={styles.field}
                  label="Destination"
                  name="counter"
                  handleChange={handleChange}
                  textarea={true}
                  value={addItem.location.counter}
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
              <div>Add Access Login</div>
              <div>
                <TextInput
                  className={styles.field}
                  label="Email/API Key"
                  name="title"
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
                  name="title"
                  value={""}
                  type="Password"
                  tooltip="Tasks per run"
                  required
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
            }}
          >
            <div>Add actions to be done</div>
            <div>
              <TextInput
                className={styles.field}
                label="Action Details"
                textarea={true}
                value={addItem.actionDescription}
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

export default AddRunLimit;
