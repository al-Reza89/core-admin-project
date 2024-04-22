import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Row.module.sass';
import Icon from '../../../../components/Icon';
import Control from '../../../../components/Control';
import Checkbox from '../../../../components/Checkbox';
import { Link } from 'react-router-dom';

const options = [
  {
    title: 'Run Audit Workflow',
    icon: 'auditWorkflow',
    action: () => {},
  },
];

const Row = ({ item, index, checked, onSelect }) => {
  const [visibleActions, setVisibleActions] = useState(false);
  return (
    <>
      <div className={styles.row}>
        <div className={styles.col}>
          <Checkbox value={checked} onChange={onSelect} />
        </div>
        <div className={styles.col}>{index + 1}</div>
        <div className={styles.col}>
          <Link to='/run-time/worflow-id' className={styles.item}>
            {item.run_time}
          </Link>
        </div>
        <div className={styles.col}>{item.date}</div>

        <div className={styles.col}>
          {item.status === 'completed' && (
            <Icon
              name='checkCircle'
              size='24'
              className={styles.icon_completed}
            />
          )}
          {item.status === 'warning' && (
            <Icon name='warning' size='24' className={styles.icon_warning} />
          )}
        </div>
        <div className={styles.col}>
          <span className={cn('tasks_run')}>{item.tasks_run}</span>
        </div>
        <div className={styles.col}>
          <div className={cn('status-green-dark', styles.distribution)}>
            +{item.auditOutcome.inc}x
          </div>

          <div className={cn('status-red-dark', styles.distribution)}>
            -{item.auditOutcome.dec}x
          </div>
        </div>
        <div className={styles.col}>
          <Control
            className={styles.control}
            visibleActions={visibleActions}
            setVisibleActions={setVisibleActions}
            // up={up}
            options={options}
          />
        </div>
      </div>
    </>
  );
};

export default Row;
