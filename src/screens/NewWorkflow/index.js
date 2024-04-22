import React, { useState } from 'react';
import cn from 'classnames';
import styles from './NewWorkflow.module.sass';
import TooltipGlodal from '../../components/TooltipGlodal';
import Dropdown from '../../components/Dropdown';
import Header from './Header';
import Overview from './Overview';
import { data } from './data';
import Comingsoon from './Comingsoon';

const NewWorkflow = () => {
  const navigation = [
    {
      title: 'Transaction Processing',
    },
    {
      title: 'Document Processing',
    },
    {
      title: 'Catalog Management',
    },
    {
      title: 'Data Extraction & Entry',
    },
    {
      title: 'Data Mining & Analytics\n(coming soon)',
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
              {x.title.split('\n')[0]}
              <p>{x.title.split('\n')[1]}</p>
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
            {activeIndex !== 4 && (
              <>
                <Header item={data[activeIndex]} />
                <Overview item={data[activeIndex]} />
              </>
            )}
            {activeIndex === 4 && <Comingsoon />}
          </div>
          {activeIndex !== 4 && (
            <button className={cn('button', styles.button)}>Save</button>
          )}
        </div>
      </div>
      <TooltipGlodal />
    </>
  );
};

export default NewWorkflow;
