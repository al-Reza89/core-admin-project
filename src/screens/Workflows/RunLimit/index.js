import React from 'react';
import cn from 'classnames';
import styles from './RunLimit.module.sass';
import Modal from '../../../components/Modal';
import TextInput from '../../../components/TextInput';

const RunLimit = ({ onClose, open }) => {
  return (
    <Modal onClose={onClose} visible={open}>
      <div className={styles.alertWrapper}>
        <div className={cn('title-primary', styles.title)}>
          Set Tasks Run Limit
        </div>
        <div className={styles.note}>
          Set maximum task Run Limit for each run.
        </div>
        <TextInput
          className={styles.field}
          label='Tasks per run'
          name='title'
          type='number'
          tooltip='Tasks per run'
          required
        />
        <div className={styles.btns}>
          <button className={cn('button')}>
            <span>Set Limit</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default RunLimit;
