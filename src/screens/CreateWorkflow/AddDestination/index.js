import React, { useState } from 'react';
import cn from 'classnames';
import styles from './AddDestination.module.sass';
import Card from '../../../components/Card';
import Dropdown from '../../../components/Dropdown';
import UploadFile from '../AddSource/UploadFile';
import SendFileViaEmail from '../AddSource/SendFileViaEmail';
import WebApps from '../AddSource/WebApps';
import ExtractFromEmail from '../AddSource/ExtractFromEmail';
import DocFromCloud from '../AddSource/DocFromCloud';

const optionsDestination = [
  'Download File (via Webchat, Slack or MS Teams)',
  'Receive via email (Send file via email to me)',
  'Web application (Write data into any web application)',
  'Email (Write emails and add attachments on Gmail or Outlook)',
  'Document in Cloud Storage (Google Drive or SharePoint)',
  'Data Base (coming soon)',
];

const AddDestination = ({ className }) => {
  const [destination, setDestination] = useState(optionsDestination[0]);

  return (
    <Card
      className={cn(styles.card, className)}
      title='Add Destination'
      classTitle='title-primary'
    >
      <Dropdown
        className={styles.field}
        label='Select destination'
        tooltip='Maximum 100 characters. No HTML or emoji allowed'
        value={destination}
        setValue={setDestination}
        options={optionsDestination}
      />
      <div className={styles.images}>
        <div className={styles.images}>
          {destination === optionsDestination[0] && <UploadFile />}
          {destination === optionsDestination[1] && <SendFileViaEmail />}
          {destination === optionsDestination[2] && <WebApps />}
          {destination === optionsDestination[3] && <ExtractFromEmail />}
          {destination === optionsDestination[4] && <DocFromCloud />}
        </div>
      </div>
    </Card>
  );
};

export default AddDestination;
