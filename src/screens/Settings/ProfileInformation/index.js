import React, { useState } from 'react';
import cn from 'classnames';
import styles from './ProfileInformation.module.sass';
import Item from '../Item';
import Icon from '../../../components/Icon';
import TextInput from '../../../components/TextInput';
import Dropdown from '../../../components/Dropdown';

const timeZones = ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4'];

const ProfileInformation = ({ className }) => {
  const [timeZone, setTimeZone] = useState(timeZones[0]);

  return (
    <Item
      className={cn(styles.card, className)}
      title='Company Information'
      classTitle='title-primary'
    >
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img src='/images/content/avatar.jpg' alt='Avatar' />
          <button className={styles.remove}>
            <Icon name='close' />
          </button>
        </div>
        <div className={styles.file}>
          <input type='file' />
          <button className={cn('button', styles.button)} type='button'>
            <Icon name='add' size='24' />
            <span>Upload new picture</span>
          </button>
        </div>
        <button className={cn('button-stroke', styles.button)}>Remove</button>
      </div>
      <div className={styles.fieldset}>
        <TextInput
          className={styles.field}
          label='Company name'
          name='display-name'
          type='text'
          tooltip='Maximum 100 characters. No HTML or emoji allowed'
          required
        />
        <TextInput
          className={styles.field}
          label='Email'
          name='email'
          type='email'
          tooltip='Maximum 100 characters. No HTML or emoji allowed'
          required
        />
        <TextInput
          className={styles.field}
          label='Location'
          name='location'
          type='text'
          tooltip='Maximum 100 characters. No HTML or emoji allowed'
          required
        />
        <Dropdown
          label='Time zone'
          className={styles.field}
          value={timeZone}
          setValue={setTimeZone}
          options={timeZones}
        />
      </div>
    </Item>
  );
};

export default ProfileInformation;
