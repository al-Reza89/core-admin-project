import React, { useState } from 'react';
import cn from 'classnames';
import styles from './AddSource.module.sass';
import Card from '../../../components/Card';
import Dropdown from '../../../components/Dropdown';
import UploadFile from './UploadFile';
import SendFileViaEmail from './SendFileViaEmail';
import WebApps from './WebApps';
import ExtractFromEmail from './ExtractFromEmail';
import DocFromCloud from './DocFromCloud';

const optionsSource = [
  'Upload File (Upload an image, spreadsheet, pdf or word doc)',
  'Send file via email (Send image, spreadsheet, pdf or word doc via email to Wiyzard)',
  'Web application (Extract data from any web application)',
  'Extract from email (Extract data & attachments from Gmail or Outlook)',
  'Document from Cloud Storage (Extract documents from Google Drive or SharePoint)',
  'Data Base (coming soon)',
];

const AddSource = ({ className }) => {
  const [source, setSource] = useState(optionsSource[0]);

  return (
    <Card
      className={cn(styles.card, className)}
      title='Add Source'
      classTitle='title-primary'
    >
      <Dropdown
        className={styles.field}
        label='Select Source'
        tooltip='Maximum 100 characters. No HTML or emoji allowed'
        value={source}
        setValue={setSource}
        options={optionsSource}
      />
      <div className={styles.images}>
        {source === optionsSource[0] && <UploadFile />}
        {source === optionsSource[1] && <SendFileViaEmail />}
        {source === optionsSource[2] && <WebApps />}
        {source === optionsSource[3] && <ExtractFromEmail />}
        {source === optionsSource[4] && <DocFromCloud />}
      </div>
    </Card>
  );
};

export default AddSource;
