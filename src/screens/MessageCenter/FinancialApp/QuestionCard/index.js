import React, { useState } from "react";
import cn from "classnames";
import styles from "./QuestionCard.module.sass";

const QuestionCard = ({
  className,
  title,
  description,
  classTitle,
  classCardHead,
  head,
  children,
  input,
  setInput,
  isInput,
  setIsInput,
}) => {
  const [textareaHeight, setTextareaHeight] = useState("50px");

  const maxTextareaHeight = "200px"; // Change as per your requirement

  const handleTextareaChange = (e) => {
    setInput(e.target.value);
    const height = e.target.scrollHeight;
    setTextareaHeight(
      height > parseInt(maxTextareaHeight)
        ? `${maxTextareaHeight}`
        : height > parseInt(textareaHeight)
        ? `${height}px`
        : textareaHeight
    );
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
    <div className={cn(styles.card, className)}>
      {title && (
        <div className={cn(styles.head, classCardHead)}>
          <div className={cn(classTitle, styles.title)}>
            {title}
            {description && <p className={styles.description}>{description}</p>}
          </div>

          {head && head}
        </div>
      )}
      {children}
      {isInput === false && (
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
                ...scrollbarStyles,
              }}
              placeholder="Type your answer here"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
