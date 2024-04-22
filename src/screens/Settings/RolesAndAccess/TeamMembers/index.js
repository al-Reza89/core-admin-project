import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Team.module.sass';
import Table from './Table';
import Modal from '../../../../components/Modal';
import AddMember from './AddMember';

const TeamMembers = () => {
  const [visibleAddModal, setVisibleAddModal] = useState(false);
  return (
    <>
      <div>
        <header className={styles.header}>
          <h3>Team Members</h3>
          <button
            className={cn('button-small')}
            onClick={() => setVisibleAddModal(true)}
          >
            Add member
          </button>
        </header>
        <Table />
      </div>
      <Modal
        visible={visibleAddModal}
        outerClassName={styles.teamAccessModalWidth}
        onClose={() => setVisibleAddModal(false)}
      >
        <AddMember onClose={() => setVisibleAddModal(false)} />
      </Modal>
    </>
  );
};

export default TeamMembers;
