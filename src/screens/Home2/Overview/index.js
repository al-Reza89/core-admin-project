import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Overview.module.sass';
import TooltipGlodal from '../../../components/TooltipGlodal';
import Card from '../../../components/Card';
import Dropdown from '../../../components/Dropdown';
import Icon from '../../../components/Icon';

const intervals = [
  'Last 24 hours',
  'Last 7 days',
  'Last 14 days',
  'Last 28 days',
  'Last 56 days',
];

const items = [
  {
    title: 'Workflows',
    icon: 'workflow',
    iconViewBox: '0 0 24 24',
    background: '#edf8f2',
    chartColor: '#83BF6E',
    data: [
      {
        name: 'Created',
        value: 70,
      },
      {
        name: 'Active',
        value: 30,
      },
    ],
  },
  {
    title: 'Runs',
    icon: 'loop',
    iconViewBox: '0 0 24 24',
    background: '#ecf9fe',
    chartColor: '#2A85FF',
    data: [
      {
        name: 'Completed',
        value: 50,
      },
      {
        name: 'Scheduled',
        value: 14,
      },
    ],
  },
  {
    title: 'Outcomes',
    icon: 'outcome',
    iconViewBox: '0 0 1920 1920',
    background: '#f2efff',
    chartColor: '#8E59FF',
    data: [
      {
        name: 'Success rate',
        value: '99%',
      },
      {
        name: 'Failures',
        value: '5/200',
      },
    ],
  },
];

const Overview = ({ className }) => {
  const [sorting, setSorting] = useState(intervals[0]);

  return (
    <>
      <Card
        className={cn(styles.card, className)}
        title='Overview'
        classTitle='title-primary'
        head={
          <Dropdown
            className={styles.dropdown}
            classDropdownHead={styles.dropdownHead}
            value={sorting}
            setValue={setSorting}
            options={intervals}
            small
          />
        }
      >
        <div className={styles.overview}>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div
                className={styles.item}
                key={index}
                style={{ backgroundColor: x.background }}
              >
                <div className={styles.header}>
                  <div className={styles.icon}>
                    <Icon name={x.icon} size='24' viewBox={x.iconViewBox} />
                  </div>
                  <h3 className={styles.title}>{x.title}</h3>
                </div>
                <div className={styles.lineContainer}>
                  {x.data.map((y) => (
                    <div key={y.name} className={styles.line}>
                      <div className={styles.details}>
                        <div className={styles.category}>{y.name}</div>
                        <div className={styles.counter}>{y.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <TooltipGlodal />
    </>
  );
};

export default Overview;
