import React, { useState } from "react";
import styles from "./Market.module.sass";
import Icon from "../../../components/Icon";
import Row from "./Row";
import TableValue from "./TableValue";

const Table = ({ items, foot, tableHeader }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (id) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== id));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, id]);
    }
  };

  return (
    <div className={styles.market}>
      <div className={styles.table}>
        <div className={styles.row}>
          {tableHeader &&
            tableHeader.map((x, index) => (
              <div key={index} className={styles.col}>
                {x.title}
              </div>
            ))}
        </div>
        {/* {items.map((x, index) => (
          <Row
            item={x}
            key={index}
            up={items.length - index <= 2}
            value={selectedFilters.includes(x.id)}
            onChange={() => handleChange(x.id)}
            index={index}
          />
        ))} */}
        {items.map((item, index) => (
          <TableValue item={item} />
        ))}
      </div>
      {foot && (
        <div className={styles.foot}>
          <button className={styles.arrow}>
            <Icon name="arrow-left" size="20" />
          </button>
          <button className={styles.arrow}>
            <Icon name="arrow-right" size="20" />
          </button>
          <h3 className={styles.page_number}>Page 1 of 3</h3>
        </div>
      )}
    </div>
  );
};

export default Table;
