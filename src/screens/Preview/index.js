import React, { useState } from "react";
import styles from "./Preview.module.sass";
import cn from "classnames";
import FinancialApp from "../MessageCenter/FinancialApp";
import NewMessageCenter from "../NewMessageCenter";
import MessageCenter from "../MessageCenter";

const Preview = () => {
  const [avatarVisible, setAvatarVisible] = useState(true);

  const handleAvatarClick = () => {
    // Hide the avatar when clicked
    setAvatarVisible(false);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src="/images/screen.png"
          alt="placeholder"
          style={{
            objectFit: "fill",
            width: "100%",
            height: "100%",
          }}
        />
        {avatarVisible && (
          <div
            onClick={handleAvatarClick}
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <img
              src="/images/content/avatar.jpg"
              alt="User Avatar"
              className={styles.avatarRight}
              style={{
                maxWidth: "50px",
                maxHeight: "50px",
                borderRadius: "12px",
              }}
            />
          </div>
        )}
      </div>
      <div className={styles.messengerIcon} style={{}}>
        {avatarVisible === false && (
          <div className="" style={{}}>
            <NewMessageCenter
              setAvatarVisible={setAvatarVisible}
              avatarVisible={avatarVisible}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;
