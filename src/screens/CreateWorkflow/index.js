import React, { useState } from 'react';
import styles from './CreateWorkflow.module.sass';
import TooltipGlodal from '../../components/TooltipGlodal';
import Modal from '../../components/Modal';
import Schedule from '../../components/Schedule';
import NameAndDescription from './NameAndDescription';
import AddSource from './AddSource';
import Preview from './Preview';
import Panel from './Panel';
import AddIntermediateStep from './AddIntermediateStep';
import { ContextProvider } from './createContext';
import AddDestination from './AddDestination';
import IntermediateSteps from './IntermediateSteps';

const CreateWorkflow = () => {
  const [visiblePreview, setVisiblePreview] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());

  return (
    <ContextProvider>
      <div className={styles.row}>
        <div className={styles.col}>
          <NameAndDescription className={styles.card} />
          <AddSource className={styles.card} />
          <IntermediateSteps className={styles.card} />
          <AddIntermediateStep className={styles.card} />
          <AddDestination className={styles.card} />
        </div>
        <div className={styles.col}>
          <Preview
            visible={visiblePreview}
            onClose={() => setVisiblePreview(false)}
          />
        </div>
      </div>
      <Panel
        setVisiblePreview={setVisiblePreview}
        setVisibleSchedule={setVisibleModal}
      />
      <TooltipGlodal />
      <Modal visible={visibleModal} onClose={() => setVisibleModal(false)}>
        <Schedule
          startDate={startDate}
          setStartDate={setStartDate}
          startTime={startTime}
          setStartTime={setStartTime}
        />
      </Modal>
    </ContextProvider>
  );
};

export default CreateWorkflow;
