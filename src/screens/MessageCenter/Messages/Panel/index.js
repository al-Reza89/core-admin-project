import React from "react";
import styles from "./Panel.module.sass";
import cn from "classnames";
import Icon from "../../../../components/Icon";
import { AiOutlineHistory } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import Filters from "../../../../components/Filters";
import Form from "../../../../components/Form";
import HistoryBox from "../HistoryBox";
import { RxCross2 } from "react-icons/rx";

const Panel = ({
  selectedUser,
  items,
  setSelectedUser,
  setVisible,
  setAvatarVisible,
  avatarVisible,
}) => {
  return (
    <div className={styles.panel}>
      <div className={styles.line}>
        <img
          src="/images/content/avatar.jpg"
          alt="person"
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
        <div>
          <div className={styles.man}>{selectedUser.man}</div>
          <div className={styles.parameters}>
            <div className={styles.parameter}>{selectedUser.content}</div>
          </div>
        </div>
      </div>
      {avatarVisible === false ? (
        <div
          onClick={() => setAvatarVisible(true)}
          style={{
            marginRight: "20px",
            paddingRight: "10px",
            paddingLeft: "10px",
            paddingTop: "10px",
            paddingBottom: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000000",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          <RxCross2 fill="#6F767E" className={styles.icon} />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            paddingRight: "20px",
            gap: "10px",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <button
            style={{
              height: "40px",
              padding: "0 20px",
            }}
            className={cn("button", styles.button)}
          >
            <span style={{}}>New Chat</span>
          </button>

          <Filters
            className={styles.filters}
            title="Chat History"
            customeIcon={true}
          >
            <HistoryBox
              users={items}
              setVisible={setVisible}
              setSelectedUser={setSelectedUser}
            />
          </Filters>
        </div>
      )}
    </div>
  );
};

export default Panel;
