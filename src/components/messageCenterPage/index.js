import React from "react";
import { Link } from "react-router-dom";
import styles from "./MessageCenterPage.module.sass";
import Image from "../Image";

const MessageCenterPage = ({ children }) => {
  return (
    <div>
      <div
        style={{
          paddingLeft: "20px",
          paddingTop: "20px",
        }}
      >
        <Link className={styles.logo} to="/">
          <Image
            className={styles.pic}
            src="/images/Wiyse_Logo_White.svg"
            srcDark="/images/Wiyse_Logo_White.svg"
            alt="Core"
          />
        </Link>
      </div>
      <div
        className={styles.childrenContainer}
        style={{
          display: "flex",
          justifyContent: "center",
          height: `calc("100vh"- "160px")`,
        }}
      >
        <div
          className={styles.children}
          style={{
            width: "80%",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MessageCenterPage;
