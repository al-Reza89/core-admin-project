import React, { useState } from 'react';
import styles from './Table.module.sass';
import Icon from '../../../components/Icon';
import Row from './Row';
import CheckBox from '../../../components/Checkbox';

const Table = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (id) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== id));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, id]);
    }
  };
  const selectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((item) => item.id));
    }
  };
  const onSelect = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((x) => x !== id));
    } else {
      setSelectedItems((selectedItems) => [...selectedItems, id]);
    }
  };

  return (
    <div className={styles.market}>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>
            <CheckBox
              onChange={selectAll}
              value={items.length === selectedItems.length}
            />
          </div>
          <div className={styles.col}>S. No.</div>
          <div className={styles.col}>Run time</div>
          <div className={styles.col}>Date</div>
          <div className={styles.col}>Status</div>
          <div className={styles.col}>Tasks/Run</div>
          <div className={styles.col}>Audit Outcome</div>
          <div className={styles.col}></div>
        </div>
        {items.map((x, index) => (
          <Row
            onSelect={() => onSelect(x.id)}
            checked={selectedItems.includes(x.id)}
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
