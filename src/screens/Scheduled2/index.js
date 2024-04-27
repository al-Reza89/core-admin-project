// import React, { useState } from "react";
import cn from "classnames";
import styles from "./Scheduled2.module.sass";
// import ModalProduct from "../../components/ModalProduct";
import ScheduledModal from "./ScheduledModal";

const Scheduled2 = () => {
  // const [visibleModalProduct, setVisibleModalProduct] = useState(false);

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
      {/* <button
        onClick={() => setVisibleModalProduct(true)}
        className={cn("button-small", styles.button)}
      >
        <span>pop up modal</span>
      </button>
      <ModalProduct
        visible={visibleModalProduct}
        onClose={() => setVisibleModalProduct(false)}
        modalChild={<ScheduledModal />}
        editOption={false}
      /> */}
      <ScheduledModal />
    </div>
  );
};

export default Scheduled2;
