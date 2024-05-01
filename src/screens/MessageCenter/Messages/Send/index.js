import React, { useState } from "react";
import cn from "classnames";
import styles from "./Send.module.sass";
import Icon from "../../../../components/Icon";
import Smile from "../../../../components/Smile";

const Send = () => {
  const [input, setInput] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("50px");

  const maxTextareaHeight = "100px"; // Change as per your requirement

  const handleTextareaChange = (e) => {
    setInput(e.target.value);
    const height = e.target.scrollHeight;
    const newHeight =
      height > parseInt(maxTextareaHeight)
        ? `${maxTextareaHeight}`
        : `${height}px`;
    setTextareaHeight(newHeight);
  };

  const scrollbarStyles = {
    WebkitScrollbar: {
      width: "8px",
    },
    WebkitScrollbarTrack: {
      background: "#f1f1f1",
    },
    WebkitScrollbarThumb: {
      background: "#888",
      borderRadius: "4px",
    },
    WebkitScrollbarThumbHover: {
      background: "#555",
    },
  };

  return (
    <div className={styles.send}>
      <div className={styles.file}>
        <input type="file" />
        <Icon name="file-add" size="24" />
      </div>
      <Smile className={styles.smile} up />
      <div className={styles.form}>
        <textarea
          className={styles.input}
          value={input}
          onChange={handleTextareaChange}
          style={{
            height: textareaHeight,
            maxHeight: maxTextareaHeight,
            overflowY: "auto",
            resize: "none",
            ...scrollbarStyles,
          }}
          placeholder="Type your answer here"
        />
        <button className={cn("button-small", styles.button)}>Send</button>
      </div>
    </div>
  );
};

export default Send;
