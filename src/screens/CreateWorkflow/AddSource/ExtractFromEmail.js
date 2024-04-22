import React from 'react';
import styles from './AddSource.module.sass';
import TextInput from '../../../components/TextInput';
import Radio from '../../../components/Radio';

const ExtractFromEmail = () => {
  return (
    <div>
      <div className={styles.row}>
        <p className={styles.label}>Authenticate using Gmail API keys</p>
        <Radio name='apiKey' />
      </div>
      <div className={styles.row}>
        <p className={styles.label}>Authenticate by using Outlook API keys</p>
        <Radio name='apiKey' />
      </div>
      <TextInput
        className={styles.field}
        label='Add API keys'
        name='apiKey'
        type='text'
        tooltip='Maximum 100 characters. No HTML or emoji allowed'
        required
      />
    </div>
  );
};

export default ExtractFromEmail;
