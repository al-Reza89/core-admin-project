import React from 'react';
import cn from 'classnames';
import styles from './Header.module.sass';
import { Link } from 'react-router-dom';

const Header = ({ item }) => {
  const { heading, overview } = item;
  return (
    <div className={styles.header}>
      <div className={styles.details}>
        <div className={styles.wrap}>
          <div className={cn('h4', styles.man)}>{heading}</div>
          <div className={styles.info}>{overview}</div>
        </div>
      </div>
      <div className={styles.contacts}>
        <Link to='/create-workflow' className={cn('button', styles.button)}>
          Create Workflow
        </Link>
      </div>
    </div>
  );
};

export default Header;
