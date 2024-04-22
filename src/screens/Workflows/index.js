import React, { useContext, useState } from 'react';
import styles from './Workflows.module.sass';
import cn from 'classnames';
import Card from '../../components/Card';
import Table from './Table';
import Dropdown from '../../components/Dropdown';
import { headerDropdownAtom } from '../../atoms/headerDropdownAtom';
import { useRecoilValue } from 'recoil';
import WorkflowContextProvider, { workflowContext } from './workflowContext';

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
    tasks_run: 5,
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
    tasks_run: 10,
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
    tasks_run: 5,
    success_score: {
      counter: '95%',
      percentage: '95%',
      color: '#FFD88D',
    },
  },
];
const intervals = [
  'Last 24 hours',
  'Last 7 days',
  'Last 14 days',
  'Last 28 days',
  'Last 56 days',
];
const Workflows = () => {
  const useHeaderDropdownActive = useRecoilValue(headerDropdownAtom);
  const { activeTab, setActiveTab } = useContext(workflowContext);
  const [sorting, setSorting] = useState(intervals[0]);
  const navigation = ['Active', 'Deactive', 'Draft'];

  return (
    <Card
      className={styles.card}
      title={`${useHeaderDropdownActive.title} Workflows`}
      classTitle='title-primary'
      head={
        <>
          <Dropdown
            className={styles.dropdown}
            classDropdownHead={styles.dropdownHead}
            value={sorting}
            setValue={setSorting}
            options={intervals}
            small
          />
          <div className={cn(styles.nav, 'mobile-hide')}>
            {navigation.map((x, index) => (
              <button
                style={{
                  fontSize: '15px',
                  padding: '8px 16px',
                  fontWeight: 'bold',
                }}
                className={cn(
                  x === 'Active' && activeTab === 'Active'
                    ? 'status-green'
                    : x === 'Deactive' && activeTab === 'Deactive'
                    ? 'status-red'
                    : styles.link,
                  {
                    [styles.active]: x === activeTab,
                  }
                )}
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
            className={cn(
              x === 'Active'
                ? 'status-green'
                : x === 'Deactive'
                ? 'status-red'
                : styles.link,
              {
                [styles.active]: x === activeTab,
              }
            )}
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

const WorkflowsWrapper = () => {
  return (
    <WorkflowContextProvider>
      <Workflows />
    </WorkflowContextProvider>
  );
};

export default WorkflowsWrapper;
