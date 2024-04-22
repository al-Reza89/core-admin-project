import React, { useContext } from 'react';
import cn from 'classnames';
import styles from './AddIntermediateStep.module.sass';
import Card from '../../../components/Card';
import Icon from '../../../components/Icon';

import { createWorkflowContext } from '../createContext';

const AddIntermediateStep = ({ className }) => {
  const { addIntermediateSource } = useContext(createWorkflowContext);
  return (
    <Card
      className={cn(styles.card, className)}
      title='Add Intermediate Step'
      classTitle='title-primary'
      head={
        <button
          onClick={addIntermediateSource}
          className={cn('button button-small', styles.button)}
        >
          <Icon name='add' size='18' />
          <span>Add</span>
        </button>
      }
    ></Card>
  );
};

export default AddIntermediateStep;
