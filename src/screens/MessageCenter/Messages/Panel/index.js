import React from 'react';
import styles from './Panel.module.sass';

const Panel = ({ selectedUser }) => {
  return (
    <div className={styles.panel}>
      <div className={styles.line}>
        <div className={styles.man}>{selectedUser.man}</div>
      </div>
      <div className={styles.parameters}>
        <div className={styles.parameter}>{selectedUser.content}</div>
      </div>
    </div>
  );
};

export default Panel;
