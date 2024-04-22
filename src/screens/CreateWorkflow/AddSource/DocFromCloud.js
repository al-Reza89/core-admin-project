import React from 'react';
import styles from './AddSource.module.sass';
import cn from 'classnames';
import Icon from '../../../components/Icon';

const DocFromCloud = () => {
  return (
    <div className={styles.row}>
      <p className={styles.label}>
        wiyzard@wiyse.com
        <br />
        <span className={styles.caption}>
          (Use above email to grant full editing privileges to folder on cloud
          storage)
        </span>
      </p>
      <button className={cn('button-stroke')}>
        <Icon name='copy' size='24' />
        <span>Copy email</span>
      </button>
    </div>
  );
};

export default DocFromCloud;
