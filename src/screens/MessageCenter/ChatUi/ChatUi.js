import React from "react";
import cn from "classnames";
import styles from "./ChatUi.module.sass";
import { FaCirclePause } from "react-icons/fa6";

// Import avatar image
// import avatarImage from "./avatar.png"; // Adjust the path to your avatar image

const messages = [
  {
    id: 1,
    text: "Hello",
    time: "12:00",
    user: "user1",
  },
  {
    id: 2,
    text: "Hi",
    time: "12:01",
    user: "user2",
  },
  {
    id: 3,
    text: "How are you?",
    time: "12:02",
    user: "user1",
  },
  {
    id: 4,
    text: "I'm fine, thank you",
    time: "12:03",
    user: "user2",
  },
  {
    id: 5,
    text: "",
    time: "12:04",
    user: "user1",
  },
  {
    id: 6,
    text: "I'm good too fsdf s sdfdsdssd",
    time: "12:05",
    user: "user2",
  },
];
const ChatUi = () => {
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
      {sortedMessages.map((message) => (
        <div
          style={{
            maxWidth: "65%",
            minWidth: "30%",
          }}
          key={message.id}
          className={cn(styles.message, {
            [styles.leftMessage]: message.user === "user1",
            [styles.rightMessage]: message.user !== "user1",
          })}
        >
          <div className={styles.messageContent}>
            {message.text ? (
              <p>{message.text}</p>
            ) : (
              <p
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
          {/* Avatar positioned based on user */}
          {message.user === "user1" ? (
            <div>
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
          ) : (
            <div>
              <img
                src="/images/content/avatar.jpg"
                alt="User Avatar"
                className={styles.avatarRight}
              />
              {/* <div className={styles.markRight}>Pause generating</div> */}
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
  );
};

export default ChatUi;
