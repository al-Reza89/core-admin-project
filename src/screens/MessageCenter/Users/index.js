import React, { useState } from "react";
import cn from "classnames";
import styles from "./Users.module.sass";
import Form from "../../../components/Form";
import Item from "./Item";
import { FaBars } from "react-icons/fa";

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
          position: "relative",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "500",
            paddingBottom: "15px",
          }}
        >
          History
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            position: "absolute",
            right: "0",
            top: "0",
          }}
        >
          <FaBars
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      <div className={styles.list}>
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
      <Form
        className={styles.form}
        value={search}
        setValue={setSearch}
        onSubmit={onSubmit}
        placeholder="Search message"
        type="text"
        name="search"
        icon="search"
      />
    </div>
  );
};

export default Users;
