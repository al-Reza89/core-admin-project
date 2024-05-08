import React from "react";
import cn from "classnames";
import styles from "./RejectAlert.module.sass";
import Modal from "../../../components/Modal";

const RejectAlert = ({ onClose, open, item }) => {
  return (
    <Modal onClose={onClose} visible={open}>
      <div className={styles.alertWrapper}>
        <div className={cn("title-primary", styles.title)}>Reject</div>
        <div className={styles.note}>Are you sure you want to Reject?</div>

        <div className={styles.btns}>
          <button
            onClick={onClose}
            className={cn("button-stroke", styles.button_red)}
          >
            <span>Reject</span>
          </button>
          <button
            onClick={onClose}
            className={cn("button-stroke", styles.button)}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default RejectAlert;
