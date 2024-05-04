import React from "react";
import styles from "./Row.module.sass";
import Control from "../../../../components/Control";
import Item from "../Item";

const Actions = ({
  item,
  icons,
  className,
  visibleActions,
  setVisibleActions,
  options,
}) => {
  console.log(item);
  console.log(item.bulletList);

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.item}>
          <div className={styles.details}>
            <div className={styles.product}>{item.title}</div>
            <div className={styles.wrap}>
              <div className={styles.category}>{item.description}</div>
            </div>
          </div>
        </div>
      </div>
      {/* bullet list */}
      <div className={styles.col}>
        <div className={styles.item}>
          <div className={styles.details}>
            <div className={styles.wrap}>
              {item.bulletList.map((list, index) => (
                <li
                  style={{
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                  className={styles.category}
                >
                  {list}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      {icons && icons.length > 0 && (
        <div style={{}} className={styles.col}>
          <div
            style={{
              position: "relative",
              top: "30px",
            }}
          >
            <Control
              className={styles.control}
              visibleActions={visibleActions}
              setVisibleActions={setVisibleActions}
              options={options}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Actions;
