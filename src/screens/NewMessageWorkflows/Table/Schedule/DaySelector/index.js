import React from 'react';
import cn from 'classnames';
import Checkbox from '../../../../../components/Checkbox';
import styles from './DaySelector.module.sass';
import Icon from '../../../../../components/Icon';
/*
<div className={styles.time}>
            <div className={styles.top}>
              <div className={styles.subtitle}>
                {startTime && format(startTime, 'h:mm aa')}
              </div>
              <button
                className={styles.close}
                onClick={() => setVisibleTime(false)}
              >
                <Icon name='close' size='20' />
              </button>
            </div>
            <DatePicker
              selected={startTime}
              onChange={(date) => setStartTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption={false}
              dateFormat='h:mm aa'
              inline
            />
          </div>
*/
const DaySelector = ({ onDaySelect, selectedDays, setVisibleDate }) => {
  return (
    <div className={styles.DaySelector}>
      <div className={styles.top}>
        <div className={styles.subtitle}>Select Day</div>
        <button className={styles.close} onClick={() => setVisibleDate(false)}>
          <Icon name='close' size='20' />
        </button>
      </div>
      <ul>
        <li className={styles.dayItem}>
          <Checkbox
            onChange={() => onDaySelect('monday')}
            value={selectedDays.includes('monday')}
            id='monday'
          />{' '}
          <label
            className={cn({ [styles.active]: selectedDays.includes('monday') })}
            htmlFor='monday'
          >
            Monday
          </label>
        </li>
        <li className={styles.dayItem}>
          <Checkbox
            id='tuesday'
            onChange={() => onDaySelect('tuesday')}
            value={selectedDays.includes('tuesday')}
          />
          <label
            className={cn({
              [styles.active]: selectedDays.includes('tuesday'),
            })}
            htmlFor='tuesday'
          >
            Tuesday
          </label>
        </li>
        <li className={styles.dayItem}>
          <Checkbox
            onChange={() => onDaySelect('wednesday')}
            value={selectedDays.includes('wednesday')}
            id='wednesday'
          />{' '}
          <label
            className={cn({
              [styles.active]: selectedDays.includes('wednesday'),
            })}
            htmlFor='wednesday'
          >
            wednesday
          </label>
        </li>
        <li className={styles.dayItem}>
          <Checkbox
            onChange={() => onDaySelect('thursday')}
            value={selectedDays.includes('thursday')}
            id='Thursday'
          />{' '}
          <label
            className={cn({
              [styles.active]: selectedDays.includes('thursday'),
            })}
            htmlFor='Thursday'
          >
            Thursday
          </label>
        </li>
        <li className={styles.dayItem}>
          <Checkbox
            onChange={() => onDaySelect('friday')}
            value={selectedDays.includes('friday')}
            id='Firday'
          />{' '}
          <label
            className={cn({
              [styles.active]: selectedDays.includes('friday'),
            })}
            htmlFor='Firday'
          >
            Firday
          </label>
        </li>
        <li className={styles.dayItem}>
          <Checkbox
            id='Saturday'
            onChange={() => onDaySelect('saturday')}
            value={selectedDays.includes('saturday')}
          />{' '}
          <label
            className={cn({
              [styles.active]: selectedDays.includes('saturday'),
            })}
            htmlFor='Saturday'
          >
            Saturday
          </label>
        </li>
        <li className={styles.dayItem}>
          <Checkbox
            onChange={() => onDaySelect('sunday')}
            value={selectedDays.includes('sunday')}
            id='Sunday'
          />{' '}
          <label
            className={cn({
              [styles.active]: selectedDays.includes('sunday'),
            })}
            htmlFor='Sunday'
          >
            Sunday
          </label>
        </li>
      </ul>
    </div>
  );
};

export default DaySelector;
