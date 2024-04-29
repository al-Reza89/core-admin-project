import React, { useState } from "react";
import cn from "classnames";
import styles from "./ChatUi.module.sass";
import { FaCirclePause } from "react-icons/fa6";
import { messages } from "../../../utils/messages";

// Import avatar image
// import avatarImage from "./avatar.png"; // Adjust the path to your avatar image

const ChatUi = () => {
  const [isLoading, setIsLoading] = useState(false);
  // Sort messages based on the time slot
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.time) - new Date(b.time)
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {sortedMessages.map((message) => (
          <div
            style={{
              minWidth: "20%",
              width: "fit-content",
            }}
            key={message.id}
            className={cn(styles.message, {
              [styles.leftMessage]: message.user === "user1",
              [styles.rightMessage]: message.user !== "user1",
            })}
          >
            <div className={styles.messageContent}>
              {isLoading === false && message.text ? (
                <div>{message.text}</div>
              ) : (
                <p
                  className={styles.dot}
                  style={{
                    display: "inline-block",
                    paddingLeft: "35px",
                    transition: "transform 1s ease-in-out",
                    animation: "moveDot 3s infinite",
                  }}
                >
                  • • •
                </p>
              )}
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
                  src="https://freelogopng.com/images/all_img/1681142503openai-icon-png.png"
                  alt="User Avatar"
                  className={styles.avatarLeft}
                />
                <div className={styles.markLeft}>
                  <FaCirclePause />
                  {"  "} Pause generating
                </div>
              </div>
            )}
          </div>
        ))}
        <style jsx>
          {`
            @keyframes moveDot {
              0% {
                opacity: 0;
              }
              50% {
                opacity: 1;
              }
              100% {
                opacity: 0;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default ChatUi;
