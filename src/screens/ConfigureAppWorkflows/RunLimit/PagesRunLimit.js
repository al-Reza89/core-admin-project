import React, { useState } from "react";
import cn from "classnames";
import styles from "./RunLimit.module.sass";
// import Modal from "../../../components/Modal";
import TextInput from "../../../components/TextInput";
import ConfigureModal from "../../../components/ConfigureModal";
import { WithContext as ReactTags } from "react-tag-input";

const PagesRunLimit = ({ onClose, open, item }) => {
  const KeyCodes = {
    comma: 188,
    enter: 13,
  };
  const delimiters = [KeyCodes.comma, KeyCodes.enter];
  const [tags, setTags] = useState([{ id: "Geometry", text: "Geometry" }]);
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = [...tags].slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  const onClearAll = () => {
    setTags([]);
  };

  const onTagUpdate = (i, newTag) => {
    const updatedTags = tags.slice();
    updatedTags.splice(i, 1, newTag);
    setTags(updatedTags);
  };

  const [isActive, setIsActive] = useState(false);

  const toggleState = () => {
    setIsActive(!isActive);
  };
  return (
    <ConfigureModal onClose={onClose} visible={open}>
      <div className={styles.alertWrapper}>
        <div className={cn("title-primary", styles.title)}>Pages</div>
        <div className={styles.note}>Configure Your Apps</div>
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
          <div className={styles.tags}>
            <ReactTags
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              handleDrag={handleDrag}
              delimiters={delimiters}
              handleTagClick={handleTagClick}
              onClearAll={onClearAll}
              onTagUpdate={onTagUpdate}
              suggestions={[{ id: "1", text: "Geometry" }]}
              placeholder="Enter tags to describe your item"
              minQueryLength={2}
              maxLength={20}
              autofocus={false}
              allowDeleteFromEmptyInput={true}
              autocomplete={true}
              readOnly={false}
              allowUnique={true}
              allowDragDrop={true}
              inline={true}
              inputFieldPosition="inline"
              allowAdditionFromPaste={true}
              editable={true}
              clearAll={true}
              tags={tags}
            />
          </div>
        </div>

        <div className={styles.btns}>
          <button className={cn("button")}>
            <span>Reschedule</span>
          </button>
        </div>
      </div>
    </ConfigureModal>
  );
};

export default PagesRunLimit;
