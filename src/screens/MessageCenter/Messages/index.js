import React, { useState } from "react";
import cn from "classnames";
import styles from "./Messages.module.sass";
import Panel from "./Panel";
import Send from "./Send";
import ChatUi from "../ChatUi/ChatUi";

const Messages = ({
  className,
  visible,
  setVisible,
  actions,
  parameters,
  messages,
  selectedUser,
}) => {
  const [clickedMessage, setClickedMessage] = useState(false);

  return (
    <div className={cn(className, styles.messages, { [styles.show]: visible })}>
      <Panel
        selectedUser={selectedUser}
        actions={actions}
        parameters={parameters}
        setVisible={setVisible}
      />
      <div className={styles.wrapper}>
        {/* <button className={cn("button-stroke button-small", styles.button)}>
          Load conversation
        </button> */}

        <div className={styles.list}>
          {clickedMessage !== true && (
            <div
              style={{
                paddingTop: "40px",
              }}
            >
              <div
                style={{
                  paddingBottom: "20px",
                }}
                className={cn("h4", styles.title)}
              >
                How can I help you today?
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <p className={styles.paragraph}>
                    Automate Document Processing: Train Financio to process
                    receiving or extraction of financial documents from
                    different sources. Reading those documents to extract data,
                    data processing and verification, followed by result
                    presentation.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      padding: "20px",
                    }}
                    className={styles.boxContainer}
                  >
                    <button
                      onClick={() => setClickedMessage(true)}
                      className={cn("button", styles.buttonAi)}
                      style={{
                        paddingLeft: "20px",
                        width: "100%",
                        paddingRight: "20px",
                      }}
                    >
                      Use a pre-built document processing workflow
                    </button>
                    <button
                      onClick={() => setClickedMessage(true)}
                      className={cn("button", styles.buttonAi)}
                      style={{
                        paddingLeft: "20px",
                        width: "100%",
                        paddingRight: "20px",
                      }}
                    >
                      Create a new document processing workflow
                    </button>
                  </div>
                </div>
                <div className={styles.divider} style={{}}></div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <p style={{}} className={styles.paragraph}>
                    Automate any Financial workflow: Train Financio to automate
                    tasks, routing work items, setting up approval processes,
                    and integrating with various systems to streamline
                    end-to-end processes.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      padding: "20px",
                    }}
                    className={styles.boxContainer}
                  >
                    <button
                      onClick={() => setClickedMessage(true)}
                      className={cn("button", styles.buttonAi)}
                      style={{
                        paddingLeft: "20px",
                        width: "100%",
                        paddingRight: "20px",
                      }}
                    >
                      Use a pre-built Financial workflow template.
                    </button>
                    <button
                      onClick={() => setClickedMessage(true)}
                      className={cn("button", styles.buttonAi)}
                      style={{
                        paddingLeft: "20px",
                        width: "100%",
                        paddingRight: "20px",
                      }}
                    >
                      Build a new financial workflow
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* {messages.map((x, index) => (
            <Message item={x} key={index} />
          ))} */}
          {clickedMessage && <ChatUi />}
        </div>
        <Send />
      </div>
    </div>
  );
};

export default Messages;
