import React, { useContext } from 'react';
import cn from 'classnames';
import styles from './ActiveDeactivateAlert.module.sass';
import Modal from '../../../components/Modal';
import Item from './Item';
import { workflowContext } from '../workflowContext';

const ActiveDeactivate = ({ onClose, open }) => {
  const { activeTab } = useContext(workflowContext);
  const title =
    activeTab === 'Active' ? 'Deactivate Workflow' : 'Activate Workflow';
  const description =
    activeTab === 'Active'
      ? 'Are you sure you want to Deactivate workflow?'
      : 'Are you sure you want to Activate workflow?';
  return (
    <Modal onClose={onClose} visible={open}>
      <div className={styles.alertWrapper}>
        <div className={cn('title-primary', styles.title)}>{title}</div>
        <div className={styles.note}>{description}</div>

        <Item
          className={styles.item}
          category='Workflow'
          icon='workflow'
          value='Workflow name'
        />
        <div className={styles.btns}>
          <button
            className={cn(
              'button-stroke',
              activeTab === 'Active' ? styles.button_red : styles.button_green
            )}
          >
            <span>{activeTab === 'Active' ? 'Deactivate' : 'Activate'}</span>
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

export default ActiveDeactivate;
