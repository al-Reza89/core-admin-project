import React, { useState } from 'react';
import styles from './WorkflowLog.module.sass';
import cn from 'classnames';
import Card from '../../components/Card';
import Table from './Table';
import Dropdown from '../../components/Dropdown';

const items = [
  {
    id: 1,
    run_time: '13:06',
    date: '19 Jul',
    status: 'warning',
    tasks_run: 5,
    auditOutcome: {
      inc: 1.2,
      dec: 1.5,
    },
  },
  {
    id: 2,
    run_time: '15:12',
    date: '17 Jul',
    status: 'completed',
    tasks_run: 10,
    auditOutcome: {
      inc: 1.2,
      dec: 1.5,
    },
  },
  {
    id: 3,
    run_time: '12:59',
    date: '17 Jul',
    status: 'completed',
    tasks_run: 10,
    auditOutcome: {
      inc: 1.2,
      dec: 1.5,
    },
  },
  {
    id: 4,
    run_time: '10:21',
    date: '17 Jul',
    status: 'completed',
    tasks_run: 5,
    auditOutcome: {
      inc: 1.2,
      dec: 1.5,
    },
  },
];

const filterTwo = [...new Array(11)].map((_, i) =>
  i === 0 ? 'Show All' : `Run ${i}`
);
const OpsDetail = () => {
  const [run, setRun] = useState(filterTwo[0]);
  const navigation = ['Active', 'Inactive', 'Draft'];
  const [activeTab, setActiveTab] = useState(navigation[0]);

  return (
    <Card
      className={styles.card}
      title={`Procure to Pay`}
      description={'Description goes here'}
      classTitle='title-primary'
      head={
        <>
          <div className={styles.dropdownContainer}>
            <Dropdown
              className={styles.dropdown}
              classDropdownHead={styles.dropdownHead}
              value={run}
              setValue={setRun}
              options={filterTwo}
              small
            />
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

export default OpsDetail;
