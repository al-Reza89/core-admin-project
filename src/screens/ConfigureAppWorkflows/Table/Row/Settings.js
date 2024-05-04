import React, { useState } from "react";
import styles from "./Row.module.sass";
import Control from "../../../../components/Control";
import cn from "classnames";
import { SketchPicker } from "react-color";

const Settings = ({
  item,
  icons,
  className,
  visibleActions,
  setVisibleActions,
  options,
}) => {
  // State and functions for button1
  const [displayColorPicker1, setDisplayColorPicker1] = useState(false);
  const [color1, setColor1] = useState("#00ff00"); // Initial color for button1

  const handleClick1 = () => {
    setDisplayColorPicker1(!displayColorPicker1);
  };

  const handleClose1 = () => {
    setDisplayColorPicker1(false);
  };

  const handleChange1 = (color) => {
    setColor1(color.hex);
  };

  // State and functions for button2
  const [displayColorPicker2, setDisplayColorPicker2] = useState(false);
  const [color2, setColor2] = useState("blue"); // Initial color for button2

  const handleClick2 = () => {
    setDisplayColorPicker2(!displayColorPicker2);
  };

  const handleClose2 = () => {
    setDisplayColorPicker2(false);
  };

  const handleChange2 = (color) => {
    setColor2(color.hex);
  };

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.item}>
          <div className={styles.details}>
            <div className={styles.product}>{item.title}</div>
            <div className={styles.wrap}>
              <div className={styles.category}>{item.description}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.item}>
          <div className={styles.details}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
              }}
              className={styles.product}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    maxWidth: "200px",
                    width: "110px",
                  }}
                  className={cn(styles.head)}
                >
                  <div className={styles.value}>{item.button1}</div>
                  <div
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: color1,
                      marginLeft: "10px", // Adjust margin as needed
                      cursor: "pointer",
                    }}
                    onMouseEnter={handleClick1}
                  ></div>
                  {displayColorPicker1 && (
                    <div style={{ position: "absolute", zIndex: "2" }}>
                      <div
                        style={{
                          position: "fixed",
                          top: "0px",
                          right: "0px",
                          bottom: "0px",
                          left: "0px",
                        }}
                        onClick={handleClose1}
                      />
                      <SketchPicker color={color1} onChange={handleChange1} />
                    </div>
                  )}
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    maxWidth: "200px",
                    width: "110px",
                  }}
                  className={cn(styles.head)}
                >
                  <div className={styles.value}>{item.button2}</div>
                  <div
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: color2,
                      marginLeft: "10px", // Adjust margin as needed
                      cursor: "pointer",
                    }}
                    onMouseEnter={handleClick2}
                  ></div>
                  {displayColorPicker2 && (
                    <div style={{ position: "absolute", zIndex: "2" }}>
                      <div
                        style={{
                          position: "fixed",
                          top: "0px",
                          right: "0px",
                          bottom: "0px",
                          left: "0px",
                        }}
                        onClick={handleClose2}
                      />
                      <SketchPicker color={color2} onChange={handleChange2} />
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexDirection: "column",
          }}
        >
          <div className={styles.category}>{item.button1Description}</div>
          <div className={styles.category}>{item.button2Description}</div>
        </div>
      </div>

      {icons && icons.length > 0 && (
        <div style={{}} className={styles.col}>
          <div
            style={{
              position: "relative",
              top: "35px",
            }}
          >
            <Control
              className={styles.control}
              visibleActions={visibleActions}
              setVisibleActions={setVisibleActions}
              options={options}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
