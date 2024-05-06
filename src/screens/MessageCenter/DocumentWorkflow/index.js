import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import styles from "./DocumentWorkflow.module.sass";
import UploadDocument from "./UploadDocument";
import { useSteps } from "../../../context/StepContext";
import SetepWorkflow from "./SetupWorkflow";
import PreviewWorkflow from "./PreviewWorkflow";
import { adminMessages } from "../../../utils/messages";

const DocumentWorkflow = () => {
  const { currentStep, moveToNextStep, resetSteps } = useSteps();
  console.log("currentSteps", currentStep);

  const [renderedMessages, setRenderedMessages] = useState(adminMessages);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (button) => {
    console.log("Button clicked:", button);
    if (currentStep < 4) {
      moveToNextStep();
    }
    if (currentStep === 2) {
      setRenderedMessages([
        {
          id: 4,
          text: (
            <div style={{}}>
              <SetepWorkflow />
            </div>
          ),
          time: "12:03",
          user: "user1",
          button: "Generate Steps",
        },
      ]);
    }
    if (currentStep === 3) {
      setRenderedMessages([
        {
          id: 5,
          text: (
            <div style={{}}>
              <PreviewWorkflow />
            </div>
          ),
          time: "12:04",
          user: "user1",
          button: "Start Preview",
          button2: "Regenerate Steps",
        },
      ]);
    }
  };

  // useEffect(() => {
  //   const rendered = adminMessages.sort(
  //     (a, b) => new Date(a.time) - new Date(b.time)
  //   );

  //   // const rendered = isLoading ? sortedMessages.slice(0, 2) : sortedMessages;
  //   // setRenderedMessages(rendered);
  // }, [isLoading]

  // );

  useEffect(() => {
    scrollToBottom();
  }, [renderedMessages, currentStep, resetSteps]);

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
              // width: currentStep === 3 || 1 ? "99%" : "fit-content",
              width:
                (currentStep === 4) |
                ((currentStep === 1) | (currentStep === 2))
                  ? "99%"
                  : "fit-content",
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
                {message.button2 && (
                  <div onClick={resetSteps} className={styles.markLeft2}>
                    {message.button2}
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

export default DocumentWorkflow;
