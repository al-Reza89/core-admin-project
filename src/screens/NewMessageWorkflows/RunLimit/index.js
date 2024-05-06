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
        <div className={cn("title-primary", styles.title)}>Workflows</div>
        <div className={styles.note}></div>
        {/* <div
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
              textarea={true}
              type="text"
              value={item.description}
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
            textarea={true}
            value={item.actionDescription}
            name="title"
            type="text"
            tooltip="Tasks per run"
            required
          />
        </div> */}

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
                handleChange={handleChange}
                textarea={true}
                type="text"
                value={item.title}
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
              <div>Add Access Login</div>
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
