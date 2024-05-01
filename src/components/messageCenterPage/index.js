import React from "react";
import { Link } from "react-router-dom";
import styles from "./MessageCenterPage.module.sass";
import Image from "../Image";

const MessageCenterPage = ({ children }) => {
  return (
    <div className={styles.page}>
      <div
        style={{
          paddingTop: "20px",
          paddingLeft: "20px",
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
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "100%",
            padding: "0 40px 40px 40px",
          }}
        >
          <div
            className={styles.childrenContainer}
            style={{
              height: `calc("100vh"- "160px")`,
              width: "1093px",
            }}
          >
            <div className={styles.children} style={{}}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCenterPage;
