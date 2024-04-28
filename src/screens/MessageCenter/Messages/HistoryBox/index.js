import React, { useState } from "react";
import styles from "./HistoryBox.module.sass";
import Form from "../../../../components/Form";
import Users from "../../Users";

const HistoryBox = ({ users, setVisible, setSelectedUser }) => {
  const [search, setSearch] = useState("");

  const handleSearchSubmit = (e) => {
    alert();
  };

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <div>
      <Form
        className={styles.form}
        value={search}
        setValue={setSearch}
        onSubmit={() => handleSearchSubmit()}
        placeholder="Search for products"
        type="text"
        name="search"
        icon="search"
      />
      <div
        style={{
          height: "400px",
          overflowY: "scroll",
        }}
      >
        <Users
          className={styles.users}
          items={users}
          setVisible={setVisible}
          onSubmit={() => handleSubmit()}
          setSelectedUser={setSelectedUser}
        />
      </div>
    </div>
  );
};

export default HistoryBox;
