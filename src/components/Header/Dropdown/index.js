import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';
import styles from './Dropdown.module.sass';
import { useSetRecoilState } from 'recoil';
import { headerDropdownAtom } from '../../../atoms/headerDropdownAtom';

const intervals = [
  {
    title: 'Financio',
    description: 'For Finance teams',
    image: '/images/peoples/Financio.png',
  },
  {
    title: 'Marko',
    description: 'For Marketing teams',
    image: '/images/peoples/Marko.png',
  },
  {
    title: 'Opera',
    description: 'For Operations teams',
    image: '/images/peoples/Opera.png',
  },
  {
    title: 'Revo',
    description: 'For Revenue teams',
    image: '/images/peoples/Revo.png',
  },
  {
    title: 'Servio',
    description: 'For Customer Service teams',
    image: '/images/peoples/Servio.png',
  },
  {
    title: 'Talena',
    description: 'For HR teams',
    image: '/images/peoples/Talena.png',
  },
];
const DropdownCmp = () => {
  const setHeaderDropdownActive = useSetRecoilState(headerDropdownAtom);
  const [sorting, setSorting] = useState(intervals[0]);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setHeaderDropdownActive(sorting);
  }, [sorting, setHeaderDropdownActive]);

  const handleClick = (value) => {
    setSorting(value);
    setVisible(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(
          styles.dropdown,
          // { [styles.small]: small },
          {
            [styles.active]: visible,
          }
        )}
      >
        <div className={cn(styles.head)} onClick={() => setVisible(!visible)}>
          <div className={cn(styles.selection)}>
            <img
              src={sorting.image}
              alt={sorting.title}
              className={styles.avatar}
            />
            <div className={cn(styles.selection_content)}>
              <h3>{sorting.title}</h3>
              <p>{sorting.description}</p>
            </div>
          </div>
        </div>
        <div className={cn(styles.body)}>
          {intervals.map((x, index) => (
            <div
              className={cn(styles.option, {
                [styles.selectioned]: x.title === sorting.title,
              })}
              onClick={() => handleClick(x, index)}
              key={index}
            >
              <div className={cn(styles.selection)}>
                <img src={x.image} alt={x.title} className={styles.avatar} />
                <div className={cn(styles.selection_content)}>
                  <h3>{x.title}</h3>
                  <p>{x.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default DropdownCmp;
