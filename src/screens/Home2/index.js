import React from 'react';
import styles from './Home.module.sass';
import TooltipGlodal from '../../components/TooltipGlodal';
import Overview from './Overview';
import WorkflowRuns from './WorkflowRuns';
import SuccessRate from './SuccessRate';
import Workflows from './Workflows';

const Home = () => {
  return (
    <>
      <div className={styles.section}>
        <Overview className={styles.card} />
        <div className={styles.row}>
          <div className={styles.col}>
            <WorkflowRuns />
          </div>
          <div className={styles.col}>
            <SuccessRate />
          </div>
        </div>
        <Workflows />
      </div>
      <TooltipGlodal />
    </>
  );
};

export default Home;
