import React, { useState } from "react";
import cn from "classnames";
import styles from "./ScheduledModal.module.sass";

const buttons = [
  "Customer Service",
  "Finance",
  "Marketing",
  "HR",
  "Operations",
  "IT & Support",
  "Sales & Account",
];

const ScheduledModal = () => {
  const [selectedButton, setSelectedButton] = useState(null);

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
    } else {
      // Handle case where no button is selected
      console.log("Please select a button before proceeding.");
      alert("Please select a button before proceeding.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Get Started with Wiyse.</h1>
          <p className={styles.paragraph}>
            Tell us what department do you work in so we can assign you the
            right AI worker.
          </p>
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
              className={cn(styles.button, {
                [styles.selected]: selectedButton === button,
              })}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className="button" onClick={handleNextButtonClick}>
          <span>Next</span>
        </button>
      </div>
    </div>
  );
};

export default ScheduledModal;
