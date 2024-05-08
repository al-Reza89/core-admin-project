import React from 'react';
import cn from 'classnames';
import Icon from '../../../../../components/Icon';
import styles from './MonthDaySelector.module.sass';

const DaySelector = ({ selectedMonth, setSelectedMonth, setVisibleDate }) => {
  const dayArr = [...new Array(31)].map((_, i) => `Day ${i + 1}`);
  return (
    <div className={styles.DaySelector}>
      <div className={styles.top}>
        <div className={styles.subtitle}>Select Day</div>
        <button className={styles.close} onClick={() => setVisibleDate(false)}>
          <Icon name='close' size='20' />
        </button>
      </div>
      <ul className={styles.DaySelector__list}>
        {dayArr.map((day, i) => (
          <li
            className={cn({ [styles.active]: selectedMonth === day })}
            onClick={() => setSelectedMonth(day)}
            key={day}
          >
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DaySelector;
