import React from 'react';
import cn from 'classnames';
import styles from './Overview.module.sass';

const Overview = ({ item }) => {
  const { examples } = item;
  return (
    <>
      <div className={styles.overview}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={cn('title-primary', styles.subtitle)}>Examples</div>
            <ul className={styles.features}>
              {examples.map((x, index) => (
                <li key={index}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
