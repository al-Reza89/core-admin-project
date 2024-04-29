import React from "react";
import styles from "./SetupWorkflow.module.sass";
import cn from "classnames";
import Card from "../../../../components/Card";
import Icon from "../../../../components/Icon";

const SetepWorkflow = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div className={styles.paragraph}>
        Describe your workflow in detail so I can help you build it.
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Card
          className={cn(styles.card, styles.cardWorkflow)}
          title="What is this Document"
          classTitle="title-primary"
          head={
            <button className={cn("button button-small", styles.button)}>
              <Icon name="add" size="18" />
              <span>Add</span>
            </button>
          }
        ></Card>
        <Card
          className={cn(styles.card, styles.cardWorkflow)}
          title="What source you want to extract this document from"
          classTitle="title-primary"
          head={
            <button className={cn("button button-small", styles.button)}>
              <Icon name="add" size="18" />
              <span>Add</span>
            </button>
          }
        ></Card>
        <Card
          className={cn(styles.card, styles.cardWorkflow)}
          title="What all data you want to extract from the document"
          classTitle="title-primary"
          head={
            <button className={cn("button button-small", styles.button)}>
              <Icon name="add" size="18" />
              <span>Add</span>
            </button>
          }
        ></Card>
      </div>
    </div>
  );
};

export default SetepWorkflow;
