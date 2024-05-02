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
        width: "1200px",
        height: "810px",
        margin: "auto",
        paddingTop: "50px",
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
          src="/images/screen2.png"
          alt="placeholder"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
        {avatarVisible && (
          <div
            onClick={handleAvatarClick}
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              padding: "10px",
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
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
        }}
      >
        {avatarVisible === false && (
          <div
            className=""
            style={{
              position: "relative",
            }}
          >
            {/* <MessageCenter /> */}
            <NewMessageCenter />
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;
