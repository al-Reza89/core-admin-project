import React from "react";
import styles from "./NewMessageCard.module.sass";
import cn from "classnames";

const NewMessageCard = ({
  className,
  title,
  description,
  classTitle,
  classCardHead,
  head,
  children,
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
    </div>
  );
};

export default NewMessageCard;
