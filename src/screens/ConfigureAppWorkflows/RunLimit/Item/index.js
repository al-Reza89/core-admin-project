import React from 'react';
import styles from './Item.module.sass';
import cn from 'classnames';

import Icon from '../../../../components/Icon';

const Item = ({ className, category, value, icon, visible }) => {
  return (
    <div className={cn(styles.item, className, { [styles.active]: visible })}>
      <div className={styles.head}>
        <Icon name={icon} size='24' />
        <div className={styles.details}>
          <div className={styles.category}>{category}</div>
          <div className={styles.value}>{value}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
