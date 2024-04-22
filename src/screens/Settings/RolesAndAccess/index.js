import React, { useState } from 'react';
import styles from './Roles.module.sass';
import AddDepartments from './AddDepartments';
import Dropdown from '../../../components/Dropdown';
import TeamMembers from './TeamMembers';
import Item from '../Item';

const departments = [
  'Department 1',
  'Department 2',
  'Department 3',
  'Department 4',
];
const RolesAndAccess = () => {
  const [department, setDepartment] = useState(departments[0]);
  return (
    <Item title='Roles & Access' classTitle='title-primary'>
      <div className={styles.Roles}>
        <AddDepartments />
        <Dropdown
          label='Department'
          className={styles.field}
          value={department}
          setValue={setDepartment}
          options={departments}
        />
        <TeamMembers />
      </div>
    </Item>
  );
};

export default RolesAndAccess;
