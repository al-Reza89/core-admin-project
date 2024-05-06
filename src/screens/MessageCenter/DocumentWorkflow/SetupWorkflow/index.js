import React, { useState } from "react";
import styles from "../../FinancialApp/Questions/Questions.module.sass";
import cn from "classnames";
import Card from "../../../../components/Card";
import Icon from "../../../../components/Icon";
import QuestionCard from "../../FinancialApp/QuestionCard";

const SetupWorkflow = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [isInput1, setIsInput1] = useState(true);
  const [isInput2, setIsInput2] = useState(true);
  const [isInput3, setIsInput3] = useState(true);

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
        <QuestionCard
          input={input1}
          setInput={setInput1}
          isInput={isInput1}
          setIsInput={setIsInput1}
          className={cn(styles.card, styles.cardWorkflow)}
          title="What is this Document"
          classTitle="title-primary"
          head={
            isInput1 ? (
              <button
                onClick={() => setIsInput1(false)}
                className={cn("button button-small", styles.button)}
              >
                <Icon name="add" size="14" />
                <span>Add</span>
              </button>
            ) : (
              <button
                onClick={() => setIsInput1(true)}
                className={cn("button button-small", styles.button)}
              >
                <span>Save</span>
              </button>
            )
          }
        ></QuestionCard>

        <QuestionCard
          input={input2}
          setInput={setInput2}
          isInput={isInput2}
          setIsInput={setIsInput2}
          className={cn(styles.card, styles.cardWorkflow)}
          title="What source you want to extract this document from"
          classTitle="title-primary"
          head={
            isInput2 ? (
              <button
                onClick={() => setIsInput2(false)}
                className={cn("button button-small", styles.button)}
              >
                <Icon name="add" size="14" />
                <span>Add</span>
              </button>
            ) : (
              <button
                onClick={() => setIsInput2(true)}
                className={cn("button button-small", styles.button)}
              >
                <span>Save</span>
              </button>
            )
          }
        ></QuestionCard>
        <QuestionCard
          input={input3}
          setInput={setInput3}
          isInput={isInput3}
          setIsInput={setIsInput3}
          className={cn(styles.card, styles.cardWorkflow)}
          title="What all data you want to extract from the document"
          classTitle="title-primary"
          head={
            isInput3 ? (
              <button
                onClick={() => setIsInput3(false)}
                className={cn("button button-small", styles.button)}
              >
                <Icon name="add" size="14" />
                <span>Add</span>
              </button>
            ) : (
              <button
                onClick={() => setIsInput3(true)}
                className={cn("button button-small", styles.button)}
              >
                <span>Save</span>
              </button>
            )
          }
        ></QuestionCard>
      </div>
    </div>
  );
};

export default SetupWorkflow;
