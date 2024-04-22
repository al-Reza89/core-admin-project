import React, { useState } from 'react';
import cn from 'classnames';
import styles from './TeamAccess.module.sass';
import Card from '../../../components/Card';
import Dropdown from '../../../components/Dropdown';
import Tooltip from '../../../components/Tooltip';
import Checkbox from '../../../components/Checkbox';

const compatibility = [
  {
    id: 0,
    title: 'Person 1',
  },
  {
    id: 1,
    title: 'Person 2',
  },
  {
    id: 2,
    title: 'Person 3',
  },
  {
    id: 3,
    title: 'Person 4',
  },
  {
    id: 4,
    title: 'Person 5',
  },
  {
    id: 5,
    title: 'Person 6',
  },
  {
    id: 6,
    title: 'Person 7',
  },
  {
    id: 7,
    title: 'Person 8',
  },
  {
    id: 8,
    title: 'Person 9',
  },
  {
    id: 9,
    title: 'Person 10',
  },
];

const optionsDepartments = ['Department 1', 'Department 2', 'Department 3'];

const TeamAccess = ({ className, onClose }) => {
  const [departments, setDepartments] = useState(optionsDepartments[0]);

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (id) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== id));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, id]);
    }
  };

  return (
    <Card
      className={cn(styles.card, className)}
      title='Team Access'
      classTitle='title-primary'
    >
      <div className={styles.images}>
        <Dropdown
          className={styles.field}
          label='Department'
          tooltip='Maximum 100 characters. No HTML or emoji allowed'
          value={departments}
          setValue={setDepartments}
          options={optionsDepartments}
        />
        <div className={styles.label}>
          Team{' '}
          <Tooltip
            className={styles.tooltip}
            title='Maximum 100 characters. No HTML or emoji allowed'
            icon='info'
            place='right'
          />
        </div>
        <div className={styles.list}>
          <div>
            {compatibility.slice(0, 5).map((x, index) => (
              <Checkbox
                className={styles.checkbox}
                content={x.title}
                value={selectedFilters.includes(x.id)}
                onChange={() => handleChange(x.id)}
                key={index}
              />
            ))}
          </div>
          <div>
            {compatibility.slice(5, 10).map((x, index) => (
              <Checkbox
                className={styles.checkbox}
                content={x.title}
                value={selectedFilters.includes(x.id)}
                onChange={() => handleChange(x.id)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.btns}>
        <button className={cn('button-stroke', styles.button)}>Cancel</button>
        <button onClick={onClose} className={cn('button', styles.button)}>
          Close
        </button>
      </div>
    </Card>
  );
};

export default TeamAccess;
