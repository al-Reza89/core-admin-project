import React from 'react';
import cn from 'classnames';
import styles from './DeleteAlert.module.sass';
import Modal from '../Modal';
import Icon from '../Icon';

const DeleteAlert = ({ onClose, open }) => {
  return (
    <Modal onClose={onClose} visible={open}>
      <div className={styles.alertWrapper}>
        <h3 className={styles.title}>
          Are you sure you want to Deactivate workflow?
        </h3>
        <div className={styles.btns}>
          <button className={cn('button-stroke-red', styles.button)}>
            <span>Deactivate</span>
            <Icon name='powerOff' size='20' />
          </button>
          <button
            onClick={onClose}
            className={cn('button-stroke', styles.button)}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteAlert;
