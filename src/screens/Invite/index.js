import React from "react";
import styles from "./Invite.module.sass";
import cn from "classnames";
import InviteContent from "./InviteContent";

const Invite = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
      className={styles.container}
    >
      <InviteContent />
    </div>
  );
};

export default Invite;
