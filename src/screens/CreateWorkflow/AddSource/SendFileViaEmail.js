import React from 'react';
import styles from './AddSource.module.sass';
import cn from 'classnames';
import Icon from '../../../components/Icon';

const SendFileViaEmail = () => {
  return (
    <div className={styles.row}>
      <p className={styles.label}>wiyzard@wiyse.com</p>
      <button className={cn('button-stroke')}>
        <Icon name='copy' size='24' />
        <span>Copy email</span>
      </button>
    </div>
  );
};

export default SendFileViaEmail;
