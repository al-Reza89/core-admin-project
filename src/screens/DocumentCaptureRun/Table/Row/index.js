import React, { useState } from "react";
import cn from "classnames";
import styles from "./Row.module.sass";
import Item from "../Item";
import Control from "../../../../components/Control";
import Icon from "../../../../components/Icon";

const Row = ({ item, index, toggleOpenCloseAccordion, isOpenAccordion }) => {
  const { step, tab, description, variable, status, id } = item;
  const [visibleActions, setVisibleActions] = useState(false);
  const [showAccordion, setShowAccordion] = useState(false);
  const options = [
    {
      title: "Tasks/Run",
      icon: "edit",
      action: () => {},
    },
  ];
  const toggleAccordion = () => {
    toggleOpenCloseAccordion(id);
    setShowAccordion((prev) => !prev);
  };
  const statusIconCol = status.icon === "warning" ? "#FFD88D" : "#83BF6E";
  return (
    <>
      <div className={cn(styles.row, { [styles.active]: isOpenAccordion })}>
        <div className={styles.col}>{index + 1}</div>

        <div className={styles.col}>
          <Icon className={styles.step_icon} name={step.icon} size="24" />
        </div>
        <div className={styles.col}>
          <Item item={tab} />
        </div>
        <div className={styles.col}>
          <span>{description.split(", ")[0]}</span>
          <span className={styles.des_link}>{description.split(", ")[1]}</span>
        </div>
        <div className={styles.col}>
          <p className={styles.variable}>{variable.title}</p>
        </div>
        <div className={styles.col}>
          <Icon name={status.icon} size="24" fill={statusIconCol} />
        </div>
        {/* <div className={styles.col}>
          <Control
            className={styles.control}
            visibleActions={visibleActions}
            setVisibleActions={setVisibleActions}
            // up={up}
            options={options}
          />
        </div> */}
        <div className={styles.col}>
          <button
            className={cn(styles.arrowButton, {
              [styles.active]: showAccordion,
            })}
            onClick={toggleAccordion}
          >
            <Icon className={styles.downIcon} name="arrow-down" size="24" />
          </button>
        </div>
        <div
          className={cn(styles.col_accordion, {
            [styles.active]: showAccordion,
          })}
        >
          <div className={styles.info}>
            50% of new customers explore products because the author sharing the
            work on the social media network. Gain your earnings right now!{" "}
            <span role="img" aria-label="fire">
              🔥
            </span>
          </div>
          <div className={styles.btns}>
            <button className={cn("button-stroke", styles.button)}>
              Attachment1.pdf
            </button>
            <button className={cn("button-stroke", styles.button)}>
              Attachment2.pdf
            </button>
          </div>
        </div>
      </div>
      <div
        className={cn(styles.accordionBody, { [styles.active]: showAccordion })}
      ></div>
    </>
  );
};

export default Row;
