import React, { useState } from "react";
import cn from "classnames";
import styles from "./Users.module.sass";
import Form from "../../../components/Form";
import Item from "./Item";

const Users = ({
  className,
  items,
  setVisible,
  onSubmit,
  search,
  setSearch,
  setSelectedUser,
}) => {
  const [activeId, setActiveId] = useState(items[0].id);

  return (
    <div className={cn(className, styles.users)}>
      <div
        style={{
          paddingTop: "20px",
        }}
        className={styles.list}
      >
        {items.map((x, index) => (
          <Item
            setSelectedUser={setSelectedUser}
            item={x}
            activeId={activeId}
            setActiveId={setActiveId}
            setVisible={setVisible}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
