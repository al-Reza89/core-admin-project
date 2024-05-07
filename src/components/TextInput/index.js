import React, { useState } from "react";
import cn from "classnames";
import styles from "./TextInput.module.sass";
import Icon from "../Icon";
import Tooltip from "../Tooltip";

const TextInput = ({
  className,
  classLabel,
  classInput,
  label,
  icon,
  copy,
  handleChange,
  name,
  currency,
  copyText,
  tooltip,
  place,
  textarea,
  value,
  ...props
}) => {
  const [textareaHeight, setTextareaHeight] = useState("50px");
  const [input, setInput] = useState(value);

  const maxTextareaHeight = "150px"; // Change as per your requirement

  const handleTextareaChange = (e) => {
    setInput(e.target.value);
    const height = e.target.scrollHeight;
    const newHeight =
      height > parseInt(maxTextareaHeight)
        ? `${maxTextareaHeight}`
        : `${height}px`;
    setTextareaHeight(newHeight);

    if (handleChange) {
      handleChange(e.target.value, name);
    }
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
    <div
      className={cn(
        styles.field,
        { [styles.fieldIcon]: icon },
        { [styles.fieldCopy]: copy },
        { [styles.fieldCurrency]: currency },
        className
      )}
    >
      {label && (
        <div className={cn(classLabel, styles.label)}>
          {label}{" "}
          {tooltip && (
            <Tooltip
              className={styles.tooltip}
              title={tooltip}
              icon="info"
              place={place ? place : "right"}
            />
          )}
        </div>
      )}
      <div className={styles.wrap}>
        {textarea ? (
          <div className={styles.inputfield}>
            <div className={styles.inputContainer}>
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
            </div>
          </div>
        ) : (
          <div>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={cn(classInput, styles.input)}
              {...props}
            />
            {copyText && <div>copy</div>}
          </div>
        )}

        {icon && (
          <div className={styles.icon}>
            <Icon name={icon} size="24" />{" "}
          </div>
        )}
        {copy && (
          <button className={styles.copy}>
            <Icon name="copy" size="24" />{" "}
          </button>
        )}
        {currency && <div className={styles.currency}>{currency}</div>}
      </div>
    </div>
  );
};

export default TextInput;
