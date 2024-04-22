import styles from './Row.module.sass';
import cn from 'classnames';
import Checkbox from '../../../../../../components/Checkbox';

const Row = ({
  item,
  value,
  onChange,
  activeTable,
  setActiveTable,
  activeId,
  setActiveId,
}) => {
  const handleClick = (id) => {
    setActiveTable(true);
    setActiveId(id);
  };

  return (
    <>
      <div
        className={cn(
          styles.row,
          { [styles.selected]: activeId === item.id },
          { [styles.active]: activeTable }
        )}
      >
        <div className={styles.col}>
          <div className={styles.item} onClick={() => handleClick(item.id)}>
            <div className={styles.avatar}>
              <img src={item.avatar} alt='Avatar' />
            </div>
            <div className={styles.details}>
              <div className={styles.name}>{item.user}</div>
              <div className={styles.login}>{item.login}</div>
              <div className={styles.email}>{item.email}</div>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.email}>{item.email}</div>
        </div>
        <div className={styles.col}>
          <Checkbox
            className={styles.checkbox}
            value={value}
            onChange={onChange}
          />
        </div>
        <div className={styles.col}>
          <Checkbox
            className={styles.checkbox}
            value={value}
            onChange={onChange}
          />
        </div>
        <div className={styles.col}>
          <Checkbox
            className={styles.checkbox}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default Row;
