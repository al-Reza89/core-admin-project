import React, { useState } from "react";
import cn from "classnames";
import styles from "./ScheduledModal.module.sass";
import ModalProduct from "../../../components/ModalProduct";
import StartChat from "../StartChat";

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
      // const formattedButton = selectedButton.toLowerCase().replace(/\s+/g, "-");
      // navigate(`/products/scheduledModal/${formattedButton}`, {
      //   state: selectedButton,
      // });

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
          <div className={cn("h4", styles.title)}>Get Started with Wiyse</div>

          <div className={styles.paragraph}>
            Tell us what department do you work in so we can assign you the
            right AI worker.
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            // gap: "20px",
          }}
          className={styles.boxContiner}
        >
          {buttons.map((button, index) => (
            <button
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
      <div className={styles.buttonWrapper}>
        <button
          className={cn("button", styles.button)}
          onClick={handleNextButtonClick}
        >
          <span
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            Next
          </span>
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
