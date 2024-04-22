import React, { useState } from 'react';
import styles from './Schedule.module.sass';
import cn from 'classnames';
import Item from './Item';
import Icon from '../../../../components/Icon';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import Dropdown from '../../../../components/Dropdown';
import DaySelector from './DaySelector';
import MonthDaySelector from './MonthDaySelector';

const optionsCategory = ['Custom', 'Daily', 'Weekly', 'Monthly'];
const Schedule = ({
  className,
  startDate,
  setStartDate,
  startTime,
  setStartTime,
}) => {
  const [category, setCategory] = useState(optionsCategory[0]);
  const [visibleDate, setVisibleDate] = useState(false);
  const [visibleTime, setVisibleTime] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedMonthDay, setSelectedMonthDay] = useState('Day 1');

  const handleClick = () => {
    setStartDate(null);
    setTimeout(() => setStartDate(new Date()), 10);
    setVisibleDate(false);
    setSelectedDays([]);
    setSelectedMonthDay('Day 1');
  };

  let title = 'Date';
  let value = startDate && format(startDate, 'MMMM dd, yyyy');
  switch (category) {
    case 'Weekly':
      title = 'Weekly';
      value = selectedDays.length ? selectedDays.join(', ') : 'Select days';
      break;
    case 'Monthly':
      title = 'Select Day';
      value = selectedMonthDay;
      break;
    default:
      title = 'Date';
  }
  const onDaySelect = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays((prevProps) => prevProps.filter((d) => d !== day));
    } else {
      setSelectedDays((prevProps) => [...prevProps, day]);
    }
  };

  return (
    <div className={cn(styles.schedule, className)}>
      <div className={cn('title-primary', styles.title)}>
        Reschedule Workflow
      </div>
      <div className={styles.note}>
        Choose a day and time in the future you want this workflow to be
        rescheduled.
      </div>

      <Dropdown
        className={styles.field}
        value={category}
        setValue={setCategory}
        options={optionsCategory}
      />

      <div className={styles.list}>
        {category !== 'Daily' && (
          <Item
            className={styles.item}
            category={title}
            icon='calendar'
            value={value}
            visible={visibleDate}
            setVisible={setVisibleDate}
          >
            {category === 'Weekly' && (
              <DaySelector
                setVisibleDate={setVisibleDate}
                selectedDays={selectedDays}
                onDaySelect={onDaySelect}
              />
            )}
            {category === 'Monthly' && (
              <MonthDaySelector
                setVisibleDate={setVisibleDate}
                selectedMonth={selectedMonthDay}
                setSelectedMonth={setSelectedMonthDay}
              />
            )}
            {category !== 'Weekly' && category !== 'Monthly' && (
              <div className={styles.date}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormatCalendar={'MMMM yyyy'}
                  inline
                />
              </div>
            )}
            {category === 'Custom' && (
              <div className={styles.foot}>
                <button
                  className={cn('button-stroke button-small', styles.button)}
                  onClick={() => handleClick()}
                >
                  Clear
                </button>
                <button
                  className={cn('button-small', styles.button)}
                  onClick={() => setVisibleDate(false)}
                >
                  Close
                </button>
              </div>
            )}
          </Item>
        )}

        <Item
          className={styles.item}
          category='Time'
          icon='clock'
          value={startTime && format(startTime, 'h:mm aa')}
          visible={visibleTime}
          setVisible={setVisibleTime}
        >
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
        </Item>
      </div>
      <div className={styles.btns}>
        <button className={cn('button', styles.button)}>Reschedule</button>
      </div>
    </div>
  );
};

export default Schedule;
