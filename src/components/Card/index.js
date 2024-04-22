import React from 'react';
import cn from 'classnames';
import styles from './Card.module.sass';

const Card = ({
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

export default Card;
