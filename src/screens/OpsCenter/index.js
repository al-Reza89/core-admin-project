import React, { useState } from 'react';
import styles from './OpsCenter.module.sass';
import Card from '../../components/Card';
import Table from './Table';
import { headerDropdownAtom } from '../../atoms/headerDropdownAtom';
import { useRecoilValue } from 'recoil';
import Dropdown from '../../components/Dropdown';

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
const filterOne = [
  'Last 24 hours',
  'Last 7 days',
  'Last 14 days',
  'Last 28 days',
  'Last 56 days',
];
const OpsCenter = () => {
  const [days, setDays] = useState(filterOne[0]);
  const useHeaderDropdownActive = useRecoilValue(headerDropdownAtom);

  return (
    <Card
      className={styles.card}
      title={`${useHeaderDropdownActive.title} Workflows`}
      classTitle='title-primary'
      head={
        <Dropdown
          className={styles.dropdown}
          classDropdownHead={styles.dropdownHead}
          value={days}
          setValue={setDays}
          options={filterOne}
          small
        />
      }
    >
      <Table items={items} />
    </Card>
  );
};

export default OpsCenter;
