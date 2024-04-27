import React, { useState } from "react";
import cn from "classnames";
import styles from "./ScheduledModal.module.sass";
import ModalProduct from "../../../components/ModalProduct";
import StartChat from "../StartChat";
import Image from "../../../components/Image";

const buttons = [
  {
    id: 1,
    title: "Customer Service",
    person: "Servio",
    image: "https://www.wiyse.com/images/v5-img/ai-workers/Servio.png",
  },
  {
    id: 2,
    title: "Finance",
    person: "Financio",
    image: "https://www.wiyse.com/images/v5-img/ai-workers/Financio.png",
  },
  {
    id: 3,
    title: "Marketing",
    person: "Marketo",
    image: "https://www.wiyse.com/images/v5-img/ai-workers/Markeo.png",
  },
  {
    id: 4,
    title: "HR",
    person: "Talena",
    image: "https://www.wiyse.com/images/v5-img/ai-workers/Talena.png",
  },
  {
    id: 5,
    title: "Operations",
    person: "Opera",
    image: "https://www.wiyse.com/images/v5-img/ai-workers/Opera.png",
  },
  {
    id: 6,
    title: "IT & Support",
    person: "Servio",
    image: "https://www.wiyse.com/images/v5-img/ai-workers/Servio.png",
  },
  {
    id: 7,
    title: "Sales & Account",
    person: "Revo",
    image: "https://www.wiyse.com/images/v5-img/ai-workers/Revo.png",
  },
];

const ScheduledModal = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [visibleModalProduct, setVisibleModalProduct] = useState(false);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const handleNextButtonClick = () => {
    if (selectedButton) {
      console.log("Selected Button:", selectedButton);

      setVisibleModalProduct(true);
    } else {
      console.log("Please select a button before proceeding.");
      alert("Please select a button before proceeding.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div
            style={{
              paddingBottom: "15px",
            }}
          >
            <Image
              className={styles.pic}
              src="/images/Wiyse_Logo_White.svg"
              srcDark="/images/Wiyse_Logo_White.svg"
              alt="Core"
            />
          </div>
          <div className={cn("h4", styles.title)}>Get Started with Wiyse!</div>
          <div style={{}} className={styles.paragraph}>
            <span style={{}} className={styles.tellUs}>
              Tell us what department do you work in so we can assign you the
              right AI teammate.
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            paddingBottom: "40px",
            paddingTop: "40px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr ",
              justifyContent: "center",
              gap: "20px",
            }}
            className={styles.boxContainer}
          >
            {buttons.slice(0, 4).map((button, index) => (
              <button
                style={{
                  maxWidth: "200px",
                }}
                key={index}
                className={cn(styles.head, {
                  [styles.selected]: selectedButton === button,
                })}
                onClick={() => handleButtonClick(button)}
              >
                <div className={styles.value}>{button.title}</div>
              </button>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-evenly",
            }}
            className={styles.boxContainer}
          >
            {buttons.slice(4).map((button, index) => (
              <button
                style={{
                  width: "200px",
                }}
                key={index}
                className={cn(styles.head, {
                  [styles.selected]: selectedButton === button,
                })}
                onClick={() => handleButtonClick(button)}
              >
                <div className={styles.value}>{button.title}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button
          style={{
            minWidth: "295px",
            padding: "0 0",
          }}
          className={cn("button", styles.button)}
          onClick={handleNextButtonClick}
        >
          <span style={{}}>Continue</span>
        </button>
      </div>
      <ModalProduct
        visible={visibleModalProduct}
        onClose={() => setVisibleModalProduct(false)}
        modalChild={
          <StartChat selectedButton={selectedButton} buttons={buttons} />
        }
        editOption={false}
      />
    </div>
  );
};

export default ScheduledModal;
