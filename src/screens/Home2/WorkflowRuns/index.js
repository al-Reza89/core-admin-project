import React from 'react';
import styles from './WorkflowRuns.module.sass';
import Card from '../../../components/Card';
import SingleLineChart from '../../../components/SingleLineChart';

const WorkflowRuns = () => {
  return (
    <Card
      className={styles.card}
      title='Workflow Runs'
      classTitle='title-primary'
    >
      <SingleLineChart />
    </Card>
  );
};

export default WorkflowRuns;
