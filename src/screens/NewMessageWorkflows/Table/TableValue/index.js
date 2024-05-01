import React from "react";

const TableValue = ({ item }) => {
  return (
    <div style={{}}>
      <div>
        <div>
          <div>
            <div>{item.title}</div>
            <div>{item.description}</div>
          </div>
        </div>
        <div>{item.value}</div>
        <div>{item.location}</div>
        <div>
          <button>{item.button1}</button>
          <button>{item.button2}</button>
        </div>
      </div>
    </div>
  );
};

export default TableValue;
