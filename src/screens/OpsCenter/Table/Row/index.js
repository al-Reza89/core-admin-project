import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Row.module.sass';
import Item from '../Item';

const Row = ({ item, index }) => {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.col}>{index + 1}</div>

        <div className={styles.col}>
          <Link to='/ops-center/produce-to-pay'>
            <div className={styles.item}>
              <div className={styles.details}>
                <div className={styles.product}>{item.name.title}</div>
                <div className={styles.wrap}>
                  <div className={styles.price}>${item.name.title}</div>
                  <div className={styles.category}>{item.name.description}</div>
                </div>
              </div>
            </div>
          </Link>
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
          <Item className={styles.item} item={item.success_score} />
        </div>
      </div>
    </>
  );
};

export default Row;
