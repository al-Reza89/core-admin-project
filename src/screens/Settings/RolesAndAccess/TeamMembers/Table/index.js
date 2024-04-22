import React, { useState } from 'react';
import styles from './Table.module.sass';
import cn from 'classnames';
import Row from './Row';

// data
import { customers } from '../../../../../mocks/customers';

const Table = ({ className, activeTable, setActiveTable }) => {
  const [activeId, setActiveId] = useState(customers[0].id);

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (id) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== id));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, id]);
    }
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={cn(styles.table)}>
        <div className={cn(styles.row, { [styles.active]: activeTable })}>
          <div className={styles.col}>Name</div>
          <div className={styles.col}>Email</div>
          <div className={styles.col}>Run</div>
          <div className={styles.col}>Create</div>
          <div className={styles.col}>Admin</div>
        </div>
        {customers.map((x, index) => (
          <Row
            item={x}
            key={index}
            activeTable={activeTable}
            setActiveTable={setActiveTable}
            activeId={activeId}
            setActiveId={setActiveId}
            value={selectedFilters.includes(x.id)}
            onChange={() => handleChange(x.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
