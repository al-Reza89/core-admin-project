import React, { useState } from 'react';
import styles from './Workflows.module.sass';
import cn from 'classnames';
import Card from '../../../components/Card';
import Table from './Table';

const items = [
  {
    name: {
      title: 'Producre to Pay',
      description: 'Description is goes here',
    },
    run_schedule: {
      title: 'Weekly',
      description: 'Monday, 09:00 AM, PST',
    },
    total_runs: {
      color: '#EFEFEF',
      counter: 33,
    },
    tasks_run: 34,
    success_score: {
      percentage: '95%',
      color: '#FFD88D',
      counter: '95%',
    },
  },
  {
    name: {
      title: 'Producre to Pay',
      description: 'Description is goes here',
    },
    run_schedule: {
      title: 'Weekly',
      description: 'Monday, 09:00 AM, PST',
    },
    total_runs: {
      color: '#EFEFEF',
      counter: 33,
    },
    tasks_run: 34,
    success_score: {
      percentage: '95%',
      color: '#FFD88D',
      counter: '95%',
    },
  },
  {
    name: {
      title: 'Producre to Pay',
      description: 'Description is goes here',
    },
    run_schedule: {
      title: 'Weekly',
      description: 'Monday, 09:00 AM, PST',
    },
    total_runs: {
      color: '#EFEFEF',
      counter: 33,
    },
    tasks_run: 34,
    success_score: {
      counter: '95%',
      percentage: '95%',
      color: '#FFD88D',
    },
  },
];
const Workflows = () => {
  const navigation = ['Completed', 'Scheduled'];
  const [activeTab, setActiveTab] = useState(navigation[0]);

  return (
    <Card
      className={styles.card}
      title='Workflows'
      classTitle='title-primary'
      head={
        <>
          <div className={cn(styles.nav, 'mobile-hide')}>
            {navigation.map((x, index) => (
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
        </>
      }
    >
      <div className={cn(styles.nav, 'mobile-show')}>
        {navigation.map((x, index) => (
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
      <Table items={items} />
    </Card>
  );
};

export default Workflows;
