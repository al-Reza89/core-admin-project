import React from "react";
import { useState, useEffect } from "react";
import styles from "./FinancialApp.module.sass";
import cn from "classnames";
import { messages } from "../../../utils/messages";
import { FaCirclePause } from "react-icons/fa6";
import Loader from "../../../components/Loader";
import FinalizeAppWorkflow from "./FinalizeAppWorkflow";
import AppPreview from "./AppPreview";

const FinancialApp = ({ isLoading, setIsLoading }) => {
  const [renderedMessages, setRenderedMessages] = useState([]);

  const handleClick = (button) => {
    console.log("Button clicked:", button);
    if (button === "Generate Workflow") {
      setRenderedMessages([
        ...renderedMessages,
        {
          id: 4,
          text: (
            <div style={{}}>
              <FinalizeAppWorkflow />
            </div>
          ),
          time: "12:03",
          user: "user1",
          button: "Preview app UI",
        },
      ]);
    }
    if (button === "Preview app UI") {
      setRenderedMessages([
        ...renderedMessages,
        {
          id: 5,
          text: (
            <div style={{}}>
              <AppPreview />
            </div>
          ),
          time: "12:04",
          user: "user1",
          // button: "Finalize app",
        },
      ]);
    }
  };

  useEffect(() => {
    const sortedMessages = messages.sort(
      (a, b) => new Date(a.time) - new Date(b.time)
    );

    const rendered = isLoading ? sortedMessages.slice(0, 2) : sortedMessages;
    setRenderedMessages(rendered);
  }, [isLoading]);

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
        {renderedMessages.map((message, index) => (
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
                {message.button && !isLoading && (
                  <div
                    onClick={() => handleClick(message.button)}
                    className={styles.markLeft}
                  >
                    {message.button}
                  </div>
                )}
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
