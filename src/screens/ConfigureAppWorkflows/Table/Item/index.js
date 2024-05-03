import React, { useState } from "react";
import styles from "./Item.module.sass";
import cn from "classnames";
import Balance from "../../../../components/Balance";
import { GoPencil } from "react-icons/go";

const Item = ({ className, item }) => {
  const [hovered, setHovered] = useState(false);
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(item.counter || "");

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleIconClick = () => {
    setEditing(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    setEditing(false);
    console.log("Saving value:", inputValue);
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      style={{}}
      className={cn(styles.item, className)}
    >
      <div
        onMouseEnter={handleMouseEnter}
        className={styles.counter}
        style={{ backgroundColor: item.color }}
      >
        {editing ? (
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            style={{ width: "100%" }}
          />
        ) : (
          <span>{inputValue}</span>
        )}
        {/* {item.counter} */}
      </div>
      {item.value && <Balance className={styles.balance} value={item.value} />}
      <div
        onClick={handleIconClick}
        style={{
          backgroundColor: "#000000",
          padding: "3px",
          borderRadius: "50%",
          height: "36px",
          width: editing ? "72px" : "36px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "25px",
          marginLeft: "10px",
          visibility: hovered ? "visible" : "hidden",
        }}
      >
        <GoPencil className={styles.icon} size={20} style={{}} />
      </div>
    </div>
  );
};

export default Item;
