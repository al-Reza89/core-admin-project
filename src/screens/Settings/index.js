import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Settings.module.sass';
import TooltipGlodal from '../../components/TooltipGlodal';
import Dropdown from '../../components/Dropdown';
import ProfileInformation from './ProfileInformation';
import RolesAndAccess from './RolesAndAccess';
import WiyzardEmail from './WiyzardEmail';
import MessageCenter from './MessageCenter';

const Settings = () => {
  const navigation = [
    {
      title: 'Basics',
    },
    {
      title: 'Roles & Access',
    },
    {
      title: 'Wiyzard Emails',
    },
    {
      title: 'Message Center',
    },
  ];
  const options = [];
  navigation.map((x) => options.push(x.title));
  const [activeTab, setActiveTab] = useState(options[0]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className={styles.settings}>
        <div className={styles.menu}>
          {navigation.map((x, index) => (
            <button
              className={cn(styles.button, {
                [styles.active]: activeIndex === index,
              })}
              key={index}
              onClick={() => handleClick(index)}
            >
              {x.title}
            </button>
          ))}
        </div>
        <div className={styles.wrapper}>
          <Dropdown
            className={styles.dropdown}
            classDropdownHead={styles.dropdownHead}
            value={activeTab}
            setValue={setActiveTab}
            options={options}
          />
          <div className={styles.list}>
            {activeIndex === 0 && <ProfileInformation />}
            {activeIndex === 1 && <RolesAndAccess />}
            {activeIndex === 2 && <WiyzardEmail />}
            {activeIndex === 3 && <MessageCenter />}
          </div>
          <button className={cn('button', styles.button)}>Save</button>
        </div>
      </div>
      <TooltipGlodal />
    </>
  );
};

export default Settings;
