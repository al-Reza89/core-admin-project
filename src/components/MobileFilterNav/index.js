import React from 'react';
import cn from 'classnames';
import styles from './MobileFilterNav.module.sass';

const index = ({ intervals, activeTab, setActiveTab }) => {
  return (
    <div className={styles.nav}>
      {intervals.map((x, index) => (
        <button
          className={cn(styles.link, {
            [styles.active]: x === activeTab,
          })}
          onClick={() => setActiveTab(x)}
          key={index}
        >
          {x}
        </button>
      ))}
    </div>
  );
};

export default index;
