import React from 'react';
import cn from 'classnames';
import styles from './TeamAccess.module.sass';
import Card from '../../../../../components/Card';
import TextInput from '../../../../../components/TextInput';

const TeamAccess = ({ className, onClose }) => {
  return (
    <Card
      className={cn(styles.card, className)}
      title='Add member'
      classTitle='title-primary'
    >
      <div className={styles.images}>
        <TextInput
          className={styles.field}
          label='Name'
          name='display-name'
          type='text'
          tooltip='Maximum 100 characters. No HTML or emoji allowed'
          required
        />
      </div>
      <div className={styles.images}>
        <TextInput
          className={styles.field}
          label='Email id'
          name='display-name'
          type='text'
          tooltip='Maximum 100 characters. No HTML or emoji allowed'
          required
        />
      </div>
      <div className={styles.btns}>
        <button onClick={onClose} className={cn('button', styles.button)}>
          Add
        </button>
      </div>
    </Card>
  );
};

export default TeamAccess;
