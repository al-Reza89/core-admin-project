import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Messages.module.sass";
import FinancialApp from "../../MessageCenter/FinancialApp";
import Send from "../../MessageCenter/Messages/Send";
import Loader from "../../../components/Loader";
import PrebuildTemplate from "../../MessageCenter/PrebuildTemplate";
import Panel from "../../MessageCenter/Messages/Panel";

const Messages = ({
  className,
  visible,
  setVisible,
  actions,
  parameters,
  messages,
  selectedUser,
  setSelectedUser,
  items,
  setAvatarVisible,
  avatarVisible,
}) => {
  const [clickedMessage, setClickedMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(className, styles.messages, { [styles.show]: visible })}>
      <Panel
        items={items}
        setSelectedUser={setSelectedUser}
        selectedUser={selectedUser}
        actions={actions}
        parameters={parameters}
        setVisible={setVisible}
        setAvatarVisible={setAvatarVisible}
        avatarVisible={avatarVisible}
      />
      <div className={styles.wrapper}>
        {/* <button className={cn("button-stroke button-small", styles.button)}>
          Load conversation
        </button> */}

        <div className={styles.list}>
          {clickedMessage === null && (
            <div
              style={{
                paddingTop: "40px",
              }}
            >
              <div style={{}} className={cn("h4", styles.title)}>
                Lets build your first financial app?
              </div>
              <div className={styles.paragraph}>
                Tell me what would you like to build?
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  width: "100%",
                }}
                className={styles.boxWrapper}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
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
                      onClick={() => setClickedMessage("pre-build")}
                      className={cn("button", styles.buttonAi)}
                      style={{
                        paddingLeft: "20px",
                        width: "100%",
                        paddingRight: "20px",
                      }}
                    >
                      Choose from pre-build app template
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
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
                      onClick={() => setClickedMessage("financial-app")}
                      className={cn("button", styles.buttonAi)}
                      style={{
                        paddingLeft: "20px",
                        width: "100%",
                        paddingRight: "20px",
                      }}
                    >
                      Build a new financial app
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {clickedMessage === "financial-app" && (
            <FinancialApp isLoading={isLoading} />
          )}
          {clickedMessage === "pre-build" && (
            <PrebuildTemplate setClickedMessage={setClickedMessage} />
          )}
        </div>
        <Send />
        {clickedMessage === "financial-app" && isLoading && (
          <div className={styles.foot}>
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
              className={cn("button-stroke button-small")}
            >
              <Loader className={styles.loader} />
              <span>Building your workflow</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
