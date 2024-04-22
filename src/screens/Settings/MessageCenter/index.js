import React, { useState } from 'react';
import styles from './Message.module.sass';
import TextInput from '../../../components/TextInput';
import Switch from '../../../components/Switch';
import Item from '../Item';

const MessageCenter = () => {
  const [webchat, setWebchat] = useState(false);
  const [slack, setSlack] = useState(false);
  const [teams, setTeams] = useState(false);
  return (
    <Item title='Message Center' classTitle='title-primary'>
      <div className={styles.MessageCenter}>
        <div className={styles.row}>
          <h6 className={styles.label}>Webchat</h6>
          <Switch
            className={styles.switch}
            value={webchat}
            onChange={() => setWebchat(!webchat)}
          />
        </div>
        <div className={styles.row}>
          <h6 className={styles.label}>Slack</h6>
          <Switch
            className={styles.switch}
            value={slack}
            onChange={() => setSlack(!slack)}
          />
        </div>
        <div className={styles.row}>
          <TextInput
            className={styles.field}
            label='New Password'
            name='display-name'
            type='text'
            tooltip='Maximum 100 characters. No HTML or emoji allowed'
            required
          />
          <TextInput
            className={styles.field}
            label='Confirm New Password'
            name='display-name'
            type='text'
            tooltip='Maximum 100 characters. No HTML or emoji allowed'
            required
          />
        </div>
        <div className={styles.row}>
          <h6 className={styles.label}>Teams</h6>
          <Switch
            className={styles.switch}
            value={teams}
            onChange={() => setTeams(!slack)}
          />
        </div>
        <div className={styles.row}>
          <TextInput
            className={styles.field}
            label='New Password'
            name='display-name'
            type='text'
            tooltip='Maximum 100 characters. No HTML or emoji allowed'
            required
          />
          <TextInput
            className={styles.field}
            label='Confirm New Password'
            name='display-name'
            type='text'
            tooltip='Maximum 100 characters. No HTML or emoji allowed'
            required
          />
        </div>
      </div>
    </Item>
  );
};

export default MessageCenter;
