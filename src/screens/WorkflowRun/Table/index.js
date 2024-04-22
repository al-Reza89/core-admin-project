import React, { useState } from 'react';
import styles from './Market.module.sass';
import Icon from '../../../components/Icon';
import Row from './Row';

const Table = ({ items }) => {
  const [accordionsOpen, setAccordionsOpen] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (id) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== id));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, id]);
    }
  };

  const toggleOpenCloseAccordion = (id) => {
    if (accordionsOpen.includes(id)) {
      setAccordionsOpen(accordionsOpen.filter((x) => x !== id));
    } else {
      setAccordionsOpen((accordionsOpen) => [...accordionsOpen, id]);
    }
  };

  return (
    <div className={styles.market}>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>S. No.</div>
          <div className={styles.col}>Step</div>
          <div className={styles.col}>Tab</div>
          <div className={styles.col}>Description</div>
          <div className={styles.col}>Variable</div>
          <div className={styles.col}>Status</div>
          <div className={styles.col}></div>
          <div className={styles.col}></div>
        </div>
        {items.map((x, index) => (
          <Row
            isOpenAccordion={Boolean(accordionsOpen.length)}
            toggleOpenCloseAccordion={toggleOpenCloseAccordion}
            item={x}
            key={index}
            up={items.length - index <= 2}
            value={selectedFilters.includes(x.id)}
            onChange={() => handleChange(x.id)}
            index={index}
          />
        ))}
      </div>
      <div className={styles.foot}>
        <button className={styles.arrow}>
          <Icon name='arrow-left' size='20' />
        </button>
        <button className={styles.arrow}>
          <Icon name='arrow-right' size='20' />
        </button>
        <h3 className={styles.page_number}>Page 1 of 3</h3>
      </div>
    </div>
  );
};

export default Table;
