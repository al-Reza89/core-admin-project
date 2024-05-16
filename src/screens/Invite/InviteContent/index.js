import React from "react";
import styles from "./InviteContent.module.sass";
import cn from "classnames";
import Image from "../../../components/Image";
import { useNavigate } from "react-router-dom";
import TextInput from "../../../components/TextInput";
import TextInputCopy from "../../../components/TextInputCopy";
import TextInputDropdown from "../../../components/TextInputDropdown";

const InviteContent = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            style={{
              paddingBottom: "15px",
            }}
          >
            <Image
              className={styles.pic}
              src="/images/Wiyse_Logo_Dark.svg"
              srcDark="/images/Wiyse_Logo_White.svg"
              alt="Core"
            />
          </div>
          <div className={cn("h4", styles.title)}>Invite Teammates</div>
        </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <div className={styles.paragraph2}>
            <span className={styles.text}>
              Copy the link and Share in your work messenger:
            </span>
          </div>
          <TextInputCopy />
        </div>
        <div
          style={{
            width: "100%",
            marginTop: "10px",
          }}
        >
          <div className={styles.paragraph2} style={{}}>
            <span className={styles.text}>Email Addresses</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <TextInputDropdown />
            <TextInputDropdown />
            <TextInputDropdown />
          </div>
        </div>
        <div
          style={{
            width: "100%",
          }}
          className={styles.buttonWrapper}
        >
          <button
            style={{
              width: "100%",
              padding: "0 0",
            }}
            onClick={() => navigate("/new-message-center")}
            className={cn("button", styles.button)}
          >
            <span style={{}}>Invite & Continue</span>
          </button>
        </div>
        <div>
          <div
            className={styles.skip}
            style={{
              alignItems: "center",
            }}
            onClick={() => navigate("/new-message-center")}
          >
            Skip for Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteContent;
