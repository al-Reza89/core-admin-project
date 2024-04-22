import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Row.module.sass';
import Item from '../Item';
import Control from '../../../../components/Control';
import Modal from '../../../../components/Modal';
import Schedule from '../Schedule';
import TeamAccess from '../../TeamAccess';
import ActiveDeactivateAlert from '../../ActiveDeactivateAlert';
import RunLimit from '../../RunLimit';

const Row = ({ item, index }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [visibleModalRunLimit, setVisibleModalRunLimit] = useState(false);
  const [visibleModalSchedule, setVisibleModalSchedule] = useState(false);
  const [visibleModalTeamAccess, setVisibleModalTeamAccess] = useState(false);
  const [visibleModalDeactivate, setVisibleModalDeactivate] = useState(false);
  const [visibleActions, setVisibleActions] = useState(false);
  const options = [
    {
      title: 'Tasks/Run',
      icon: 'repeat',
      action: () => setVisibleModalRunLimit(true),
    },
    {
      title: 'Schedule',
      icon: 'calendar',
      action: () => setVisibleModalSchedule(true),
    },
    {
      title: 'Team access',
      icon: 'team',
      action: () => setVisibleModalTeamAccess(true),
    },
    {
      title: 'Deactivate',
      icon: 'powerOff',
      action: () => setVisibleModalDeactivate(true),
    },
  ];
  return (
    <>
      <div className={styles.row}>
        <div className={styles.col}>{index + 1}</div>

        <div className={styles.col}>
          <div className={styles.item}>
            <div className={styles.details}>
              <div className={styles.product}>{item.name.title}</div>
              <div className={styles.wrap}>
                <div className={styles.price}>${item.name.title}</div>
                <div className={styles.category}>{item.name.description}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.item}>
            <div className={styles.details}>
              <div className={styles.product}>{item.run_schedule.title}</div>
              <div className={styles.wrap}>
                <div className={styles.price}>${item.run_schedule.title}</div>
                <div className={styles.category}>
                  {item.run_schedule.description}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.col}>
          <Item className={styles.item} item={item.total_runs} />
        </div>
        <div className={styles.col}>
          <span className={cn('tasks_run')}>{item.tasks_run}</span>
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
      <RunLimit
        open={visibleModalRunLimit}
        onClose={() => setVisibleModalRunLimit(false)}
      />

      <ActiveDeactivateAlert
        open={visibleModalDeactivate}
        onClose={() => setVisibleModalDeactivate(false)}
      />

      <Modal
        visible={visibleModalTeamAccess}
        outerClassName={styles.teamAccessModalWidth}
        onClose={() => setVisibleModalTeamAccess(false)}
      >
        <TeamAccess onClose={() => setVisibleModalTeamAccess(false)} />
      </Modal>
      <Modal
        visible={visibleModalSchedule}
        onClose={() => setVisibleModalSchedule(false)}
      >
        <Schedule
          startDate={startDate}
          setStartDate={setStartDate}
          startTime={startTime}
          setStartTime={setStartTime}
        />
      </Modal>
    </>
  );
};

export default Row;
