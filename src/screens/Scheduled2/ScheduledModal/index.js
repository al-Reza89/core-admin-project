import React, { useState } from "react";
import cn from "classnames";
import styles from "./ScheduledModal.module.sass";
// import ModalProduct from "../../../components/ModalProduct";
import Image from "../../../components/Image";
import { useNavigate } from "react-router-dom";
import { aiWorkersButtons } from "../../../utils/aiWorkersButtons";

const ScheduledModal = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(null);
  // const [visibleModalProduct, setVisibleModalProduct] = useState(false);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const handleNextButtonClick = () => {
    if (selectedButton) {
      // console.log("Selected Button:", selectedButton);

      const hyphenatedTitle = selectedButton.title.replace(/\s+/g, "-");
      navigate(`/products/scheduled2/${hyphenatedTitle}`);
      // setVisibleModalProduct(true);
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
            {aiWorkersButtons.slice(0, 4).map((button, index) => (
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
            {aiWorkersButtons.slice(4).map((button, index) => (
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
      {/* <ModalProduct
        visible={visibleModalProduct}
        onClose={() => setVisibleModalProduct(false)}
        modalChild={
          <StartChat selectedButton={selectedButton} buttons={buttons} />
        }
        editOption={false}
      /> */}
    </div>
  );
};

export default ScheduledModal;
