import cn from "classnames";
import styles from "./Item.module.sass";

const Item = ({ item, setVisible, activeId, setActiveId, setSelectedUser }) => {
  const handleClick = (id) => {
    setVisible(true);
    setActiveId(id);
  };

  return (
    <div
      className={cn(
        styles.item,
        { [styles.new]: item.new },
        { [styles.online]: item.online },
        { [styles.active]: activeId === item.id }
      )}
      onClick={() => {
        handleClick(item.id);
        setSelectedUser(item);
      }}
    >
      <div className={styles.details}>
        <div
          className={styles.message}
          dangerouslySetInnerHTML={{ __html: item.content }}
        ></div>
      </div>
    </div>
  );
};

export default Item;
