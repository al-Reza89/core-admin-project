import React from 'react';
import styles from './AddSource.module.sass';
import TextInput from '../../../components/TextInput';

import Radio from '../../../components/Radio';

const WebApps = () => {
  return (
    <div>
      <TextInput
        className={styles.field}
        label='Application login page URL'
        name='pageUrl'
        type='text'
        tooltip='Maximum 100 characters. No HTML or emoji allowed'
        required
      />
      <div className={styles.row}>
        <p className={styles.label}>Auto generate login access for demo</p>
        <Radio name='pageUrl' />
      </div>
      <div className={styles.row}>
        <p className={styles.label}>
          Use self-generate logins (Go to Settings &rarr; Wiyzard Emails to
          assign access to Wiyzard on your web application){' '}
        </p>
        <Radio name='pageUrl' />
      </div>
    </div>
  );
};

export default WebApps;
