import React from "react";
import cn from "classnames";
import styles from "./StartChat.module.sass";
import { useNavigate } from "react-router-dom";

const StartChat = ({ selectedButton, buttons }) => {
  const navigate = useNavigate();

  // const filteredButtons = buttons.filter(
  //   (button) => button.title !== selectedButton.title
  // );

  // const midpoint = Math.ceil(filteredButtons.length / 2);

  // const buttons1 = filteredButtons.slice(0, midpoint);
  // const buttons2 = filteredButtons.slice(midpoint);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={cn("h4", styles.title)}>
          Say Hi to {selectedButton.person}{" "}
        </div>
        <div className={styles.paragraph}>
          {selectedButton.person} is purpose build for enterprise{" "}
          {selectedButton.title} teams
        </div>
      </div>
      <div className={styles.imageWrapper}>
        {/* {buttons1.map((button) => {
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
        })} */}
        <img
          src={selectedButton.image}
          alt={selectedButton.title}
          className={styles.mainImage}
        />
        <img
          src="/pricing-illustration.svg"
          alt="Background"
          className={styles.backgroundSVG}
        />
        {/* {buttons2.map((button) => {
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
        })} */}
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={cn("button", styles.button)}
          onClick={() => navigate("/message-center")}
        >
          <span
            style={{
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
          >
            Start Chat
          </span>
        </button>
      </div>
    </div>
  );
};

export default StartChat;
