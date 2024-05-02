import React, { useState } from "react";
import styles from "./ActionInput.module.sass";
import cn from "classnames";
import { GoPencil } from "react-icons/go";

const ActionInput = ({ value }) => {
  const [hovered, setHovered] = useState(false);
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleIconClick = () => {
    setEditing(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    setEditing(false);
    console.log("Saving value:", inputValue);
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      style={{
        display: "flex",
      }}
      className={cn(styles.item)}
    >
      <div
        onMouseEnter={handleMouseEnter}
        className={styles.counter}
        style={{}}
      >
        {editing ? (
          <textarea
            className={styles.input}
            style={{
              resize: "none",
            }}
            placeholder="Type your answer here"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        ) : (
          <span
            style={{
              maxWidth: "120px",
              flexShrink: 0,
            }}
          >
            {inputValue}
          </span>
        )}
      </div>
      <div
        onClick={handleIconClick}
        style={{
          backgroundColor: "#000000",
          padding: "3px",
          borderRadius: "50%",
          height: "36px",
          width: editing ? "36px" : "72px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "25px",
          marginLeft: "10px",
          visibility: hovered ? "visible" : "hidden",
        }}
      >
        <GoPencil className={styles.icon} size={20} style={{}} />
      </div>
    </div>
  );
};

export default ActionInput;
