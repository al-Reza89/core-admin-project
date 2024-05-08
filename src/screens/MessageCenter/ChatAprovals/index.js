import React, { useState, useEffect, useRef } from "react";
import styles from "./ChatApprovals.module.sass";
import cn from "classnames";
import { chatApprovalsMessages } from "../../../utils/messages";

const ChatApprovals = ({}) => {
  const [renderedMessages, setRenderedMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (button) => {
    console.log("Button clicked:", button);
    // if (button === "Generate Workflow") {
    //   setRenderedMessages([
    //     ...renderedMessages,
    //     {
    //       id: 4,
    //       text: (
    //         <div style={{}}>
    //           <FinalizeAppWorkflow />
    //         </div>
    //       ),
    //       time: "12:03",
    //       user: "user1",
    //       button: "Preview app UI",
    //     },
    //   ]);
    // }
    // if (button === "Preview app UI") {
    //   setRenderedMessages([
    //     ...renderedMessages,
    //     {
    //       id: 5,
    //       text: (
    //         <div style={{}}>
    //           <AppPreview />
    //         </div>
    //       ),
    //       time: "12:04",
    //       user: "user1",
    //       button: "Finalize app",
    //     },
    //   ]);
    // }
    // if (button === "Finalize app") {
    //   setRenderedMessages([
    //     ...renderedMessages,
    //     {
    //       id: 6,
    //       text: (
    //         <div style={{}}>
    //           <ConfigureApp />
    //         </div>
    //       ),
    //       time: "12:05",
    //       user: "user1",
    //     },
    //   ]);
    // }
  };

  useEffect(() => {
    const sortedMessages = chatApprovalsMessages.sort(
      (a, b) => new Date(a.time) - new Date(b.time)
    );
    setRenderedMessages(sortedMessages);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [renderedMessages]);

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
              maxWidth: "99%",
              width: "fit-content",
            }}
            key={message.id}
            className={cn(styles.message, {
              [styles.leftMessage]: message.user === "user1",
              [styles.rightMessage]: message.user !== "user1",
            })}
          >
            <div className={styles.messageContent}>
              {typeof message.text === "string" ? (
                <div className={styles.messgeText}>{message.text}</div>
              ) : (
                <div style={{}}>{message.text}</div>
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
                  src="/images/peoples/Financio.png"
                  alt="User Avatar"
                  className={styles.avatarLeft}
                />
                {message.button && (
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
                  src="/images/content/avatar.jpg"
                  alt="User Avatar"
                  className={styles.avatarRight}
                />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatApprovals;
