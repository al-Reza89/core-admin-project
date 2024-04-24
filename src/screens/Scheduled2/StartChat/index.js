import React from "react";
import cn from "classnames";
import styles from "./StartChat.module.sass";

const StartChat = ({ selectedButton, buttons }) => {
  const filteredButtons = buttons.filter(
    (button) => button.title !== selectedButton.title
  );

  const midpoint = Math.ceil(filteredButtons.length / 2);

  const buttons1 = filteredButtons.slice(0, midpoint);
  const buttons2 = filteredButtons.slice(midpoint);

  return (
    <div className={styles.wrapper}>
      <div className={styles.paragraph}>
        <h1>Say Hi to {selectedButton.person} </h1>
        <p>
          {selectedButton.person} is purpose build for enterprise{" "}
          {selectedButton.title} teams
        </p>
      </div>
      <div className={styles.imageWrapper}>
        {buttons1.map((button) => {
          if (button.title !== selectedButton.title) {
            return (
              <img
                key={button.id}
                src={button.image}
                alt={button.title}
                className={styles.imagefirst}
              />
            );
          }
          return null;
        })}
        <img
          src={selectedButton.image}
          alt={selectedButton.title}
          className={styles.mainImage}
        />
        {buttons2.map((button) => {
          if (button.title !== selectedButton.title) {
            return (
              <img
                key={button.id}
                src={button.image}
                alt={button.title}
                className={styles.image}
              />
            );
          }
          return null;
        })}
      </div>
      <div className={styles.buttonWrapper}>
        <button className={cn("button-small", styles.button)}>
          <span>Start Chat</span>
        </button>
      </div>
    </div>
  );
};

export default StartChat;