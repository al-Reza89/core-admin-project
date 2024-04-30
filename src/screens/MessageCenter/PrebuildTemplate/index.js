import React from "react";
import styles from "./PrebuildTemplate.module.sass";
import cn from "classnames";
import Icon from "../../../components/Icon";

const PrebuildTemplate = ({ setClickedMessage }) => {
  return (
    <div className={styles.container}>
      <div>
        <button
          onClick={() => setClickedMessage(null)}
          className={cn("button-stroke")}
        >
          <Icon name="arrow-left" size="20" /> Back
        </button>
      </div>
      <div className={styles.wrapper}>
        <div style={{}} className={cn("h4", styles.title)}>
          Choose one of the templates
        </div>
        <div
          className={styles.buttonContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {[...Array(12)].map((_, index) => (
            <button
              key={index}
              className={cn("button", styles.buttonAi)}
              style={{
                width: "100%",
              }}
            >
              Invoice Processing
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrebuildTemplate;
