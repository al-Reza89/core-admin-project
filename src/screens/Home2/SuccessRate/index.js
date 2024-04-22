import React from 'react';
import styles from './SuccessRate.module.sass';
import Card from '../../../components/Card';
import PieChart from './PieChart';

const ProductViews = () => {
  return (
    <Card
      className={styles.card}
      title='Success Rate'
      classTitle='title-primary'
    >
      <PieChart />
    </Card>
  );
};

export default ProductViews;
