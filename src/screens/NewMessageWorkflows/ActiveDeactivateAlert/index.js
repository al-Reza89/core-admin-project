import React from "react";
import cn from "classnames";
import styles from "./ActiveDeactivateAlert.module.sass";
import Modal from "../../../components/Modal";
import { useItems } from "../../../context/WorkflowContext";

const ActiveDeactivate = ({ onClose, open, item }) => {
  const { dispatch } = useItems();

  const handleDelete = () => {
    // Dispatch action to delete item from global state
    dispatch({ type: "DELETE_ITEM", payload: { id: item.id } });
    onClose(); // Close modal after deletion
  };

  return (
    <Modal onClose={onClose} visible={open}>
      <div className={styles.alertWrapper}>
        <div className={cn("title-primary", styles.title)}>Delete Step</div>
        <div className={styles.note}>
          Are you sure you want to delete this step?
        </div>

        <div className={styles.btns}>
          <button
            onClick={handleDelete}
            className={cn("button-stroke", styles.button_red)}
          >
            <span>Delete</span>
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

export default ActiveDeactivate;
