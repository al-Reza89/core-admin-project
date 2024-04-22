import React from 'react';
import styles from './Control.module.sass';
import cn from 'classnames';
import Icon from '../../../../components/Icon';

const Control = ({ className }) => {
  return (
    <div className={cn(styles.control, className)}>
      <button className={styles.button}>
        <Icon name='calendar' size='20' />
      </button>
      <button className={styles.button}>
        <Icon name='team' viewBox='0 0 1024 1024' size='20' />
      </button>
      <button className={styles.button}>
        <Icon name='powerOff' viewBox='0 0 113.055 122.88' size='20' />
      </button>
    </div>
  );
};

export default Control;
