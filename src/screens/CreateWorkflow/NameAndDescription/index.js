import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './NameAndDescription.module.sass';
import Card from '../../../components/Card';
import Icon from '../../../components/Icon';
import TextInput from '../../../components/TextInput';

const NameAndDescription = ({ className }) => {
  return (
    <Card
      className={cn(styles.card, className)}
      title='Name & description'
      classTitle='title-primary'
      head={
        <Link
          className={cn('button-stroke button-small', styles.button)}
          to='/new-workflow'
        >
          <Icon name='arrow-left' size='24' />
          <span>Back</span>
        </Link>
      }
    >
      <div className={styles.description}>
        <TextInput
          className={styles.field}
          label='Workflow title'
          name='title'
          type='text'
          tooltip='Maximum 100 characters. No HTML or emoji allowed'
          required
        />
        <TextInput
          className={styles.field}
          label='Workflow description'
          name='description'
          type='text'
          tooltip='Maximum 100 characters. No HTML or emoji allowed'
          required
        />
      </div>
    </Card>
  );
};

export default NameAndDescription;
