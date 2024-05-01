import React from "react";
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
        <div style={{}} className={styles.inputfield}>
          <div className={styles.inputContainer}>
            <textarea
              className={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                width: "100%",
              }}
              type="text"
              placeholder="Type your answer here"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
