import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./StartChat.module.sass";
import { useNavigate } from "react-router-dom";
import Image from "../../../components/Image";

const StartChat = ({ selectedButton, buttons }) => {
  const navigate = useNavigate();

  const [hideImages, setHideImages] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideImages(true);
    }, 1000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const filteredButtons = buttons.filter(
    (button) => button.title !== selectedButton.title
  );

  const midpoint = Math.ceil(filteredButtons.length / 2);

  const buttons1 = filteredButtons.slice(0, midpoint);
  const buttons2 = filteredButtons.slice(midpoint);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          style={{
            paddingBottom: "15px",
          }}
        >
          <Image
            className={styles.pic}
            src="/images/Wiyse_Logo_Dark.svg"
            srcDark="/images/Wiyse_Logo_White.svg"
            alt="Core"
          />
        </div>
        <div className={cn("h4", styles.title)}>
          Say Hi to {selectedButton.person}
        </div>
        <div className={styles.paragraph}>
          {selectedButton.person} is purpose build for enterprise{" "}
          {selectedButton.title} teams
        </div>
      </div>
      <div className={styles.imageWrapper}>
        {buttons1.map((button) => {
          if (button.title !== selectedButton.title) {
            return (
              <img
                key={button.id}
                src={button.image}
                alt={button.title}
                className={`${styles.imagefirst} ${
                  hideImages ? styles.fadeOut : ""
                }`}
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
        <img
          src="/pricing-illustration.svg"
          alt="Background"
          className={styles.backgroundSVG}
        />
        {buttons2.map((button) => {
          if (button.title !== selectedButton.title) {
            return (
              <img
                key={button.id}
                src={button.image}
                alt={button.title}
                className={`${styles.image} ${
                  hideImages ? styles.fadeOut : ""
                }`}
              />
            );
          }
          return null;
        })}
      </div>
      <div className={styles.buttonWrapper}>
        <button
          style={{
            minWidth: "295px",
            padding: "0 0",
          }}
          className={cn("button", styles.button)}
          onClick={() => navigate("/new-message-center")}
        >
          <span style={{}}>Continue</span>
        </button>
      </div>
    </div>
  );
};

export default StartChat;
