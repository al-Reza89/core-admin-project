import React from 'react';
import styles from './PiceChart.module.sass';
import cn from 'classnames';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const legend = [
  {
    title: 'Successful runs',
    percent: 70,
    icon: 'checked',
    classTitle: 'title-green',
    viewBox: '0 -0.5 17 17',
  },
  {
    title: 'Failures',
    percent: 30,
    icon: 'failure',
    classTitle: 'title-purple',
    viewBox: '0 0 512 512',
  },
];

const data = [
  { name: 'Successful runs', value: 70 },
  { name: 'Failures', value: 30 },
];
const COLORS = ['#83BF6E', '#AB39E5'];

const PieChartCmp = ({ className }) => {
  return (
    <>
      <div className={styles.chart}>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart width={400} height={400}>
            <Tooltip
              contentStyle={{
                backgroundColor: '#272B30',
                borderColor: 'rgba(255, 255, 255, 0.12)',
                borderRadius: 8,
                boxShadow:
                  '0px 4px 8px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1), inset 0px 0px 1px #000000',
              }}
              labelStyle={{ fontSize: 12, fontWeight: '500', color: '#fff' }}
              itemStyle={{
                padding: 0,
                textTransform: 'capitalize',
                fontSize: 12,
                fontWeight: '600',
                color: '#fff',
              }}
            />
            <Pie
              data={data}
              cx={140}
              cy={80}
              innerRadius={58}
              outerRadius={80}
              fill='#8884d8'
              paddingAngle={1}
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className={styles.legend}>
          {legend.map((x, index) => (
            <div
              className={cn(styles.indicator, styles[x.classTitle])}
              key={index}
            >
              <div className={cn(styles.title)}>{x.title}</div>
              <div className={styles.percent}>({x.percent}%)</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PieChartCmp;
