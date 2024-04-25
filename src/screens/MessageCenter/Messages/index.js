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
        <button className={cn("button-stroke button-small", styles.button)}>
          Load conversation
        </button>

        <div className={styles.list}>
          {clickedMessage !== true && (
            <div
              style={{
                paddingTop: "250px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "25px",
                  padding: "20px",
                  justifyItems: "center",
                }}
                className={styles.boxContainer}
              >
                <div
                  onClick={() => setClickedMessage(true)}
                  style={{
                    fontSize: "14px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    width: "100%",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  className={styles.command}
                >
                  Use a pre-built document processing workflow
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    width: "100%",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  className={styles.command}
                >
                  <p>Create a new document processing workflow</p>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    width: "100%",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  className={styles.command}
                >
                  <p>Use a pre-built Financial workflow template</p>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    width: "100%",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  className={styles.command}
                >
                  <p>Build a new financial workflow</p>
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
