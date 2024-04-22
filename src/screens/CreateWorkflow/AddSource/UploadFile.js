import React from 'react';
import styles from './AddSource.module.sass';
import File from '../../../components/File';
import Switch from '../../../components/Switch';

const UploadFile = () => {
  return (
    <div>
      <File
        className={styles.field}
        title='Click or drop file'
        label='Upload file'
        tooltip='Maximum 100 characters. No HTML or emoji allowed'
      />
      <div className={styles.row}>
        <p className={styles.label}>
          Enable upload via Webchat (Message Center) as well
        </p>
        <Switch />
      </div>
    </div>
  );
};

export default UploadFile;
