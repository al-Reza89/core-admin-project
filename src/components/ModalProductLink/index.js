import React, { useCallback, useEffect } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import styles from "./ModalProductLink.module.sass";
import Icon from "../Icon";
import Product from "./Product";

const ModalProductLink = ({
  visible,
  onClose,
  modalChild,
  editOption = true,
}) => {
  const escFunction = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  useEffect(() => {
    if (visible) {
      const target = document.querySelector("#modal-product");
      disableBodyScroll(target);
    } else {
      clearAllBodyScrollLocks();
    }
  }, [visible]);

  return createPortal(
    visible && (
      <div id="modal-product" className={styles.modal}>
        <div className={styles.control}>
          {editOption && (
            <Link
              className={cn("button-white", styles.button)}
              to="/products/add"
            >
              Edit product
            </Link>
          )}

          <button className={styles.close} onClick={onClose}>
            <Icon name="close" size="20" />
          </button>
        </div>
        <div className={styles.outer}>
          {modalChild ? modalChild : <Product />}
        </div>
      </div>
    ),
    document.body
  );
};

export default ModalProductLink;
