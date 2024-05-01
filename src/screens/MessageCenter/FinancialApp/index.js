import React from "react";
import styles from "./FinancialApp.module.sass";
import cn from "classnames";
import { messages } from "../../../utils/messages";
import { FaCirclePause } from "react-icons/fa6";
import Loader from "../../../components/Loader";

const FinancialApp = ({ isLoading }) => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.time) - new Date(b.time)
  );

  // Slice the messages array to render only the first two messages
  const renderedMessages = isLoading
    ? sortedMessages.slice(0, 2)
    : sortedMessages;

  return (
    <div
      style={{
        paddingTop: "10px",
        width: "100%",
      }}
    >
      <p style={{}} className={cn("h4", styles.title, styles.header)}>
        Lets build your first financial app
      </p>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {renderedMessages.map((message) => (
          <div
            style={{
              minWidth: "20%",
              maxWidth: "90%",
              width: "fit-content",
            }}
            key={message.id}
            className={cn(styles.message, {
              [styles.leftMessage]: message.user === "user1",
              [styles.rightMessage]: message.user !== "user1",
            })}
          >
            <div className={styles.messageContent}>
              <div>{message.text}</div>
            </div>
            {message.user === "user1" && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="images/peoples/Financio.png"
                  alt="User Avatar"
                  className={styles.avatarLeft}
                />
              </div>
            )}
            {message.user === "user2" && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="images/content/avatar.jpg"
                  alt="User Avatar"
                  className={styles.avatarRight}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialApp;
