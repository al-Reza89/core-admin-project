import React, { useContext, useState } from 'react';
import cn from 'classnames';
import styles from './IntSteps.module.sass';
import Card from '../../../components/Card';
import Dropdown from '../../../components/Dropdown';
import UploadFile from '../AddSource/UploadFile';
import SendFileViaEmail from '../AddSource/SendFileViaEmail';
import WebApps from '../AddSource/WebApps';
import ExtractFromEmail from '../AddSource/ExtractFromEmail';
import DocFromCloud from '../AddSource/DocFromCloud';
import { createWorkflowContext } from '../createContext';
import Icon from '../../../components/Icon';

const optionsSource = [
  'Upload File (Upload an image, spreadsheet, pdf or word doc)',
  'Send file via email (Send image, spreadsheet, pdf or word doc via email to Wiyzard)',
  'Web application (Extract data from any web application)',
  'Extract from email (Extract data & attachments from Gmail or Outlook)',
  'Document from Cloud Storage (Extract documents from Google Drive or SharePoint)',
  'Data Base (coming soon)',
];

const Step = ({ className, index, remove, id }) => {
  const [source, setSource] = useState(optionsSource[0]);
  return (
    <Card
      className={cn(styles.card, className)}
      title={`Intermediate Step ${index + 1}`}
      classTitle='title-blue'
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
      <div className={styles.remove}>
        <button
          onClick={() => remove(id)}
          className={cn('button-stroke-red button-small', styles.button)}
        >
          <Icon name='trash' size='18' />
          <span>Remove</span>
        </button>
      </div>
    </Card>
  );
};

const IntSteps = ({ className }) => {
  const { intermediateSources, removeIntermediateSource } = useContext(
    createWorkflowContext
  );
  return intermediateSources.map((item, index) => (
    <Step
      key={item.id}
      id={item.id}
      className={className}
      index={index}
      remove={removeIntermediateSource}
    />
  ));
};

export default IntSteps;
