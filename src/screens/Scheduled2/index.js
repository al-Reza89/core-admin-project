import React, { useState } from "react";
import cn from "classnames";
import styles from "./Scheduled2.module.sass";
import ModalProduct from "../../components/ModalProduct";
import ScheduledModal from "./ScheduledModal";

const Scheduled2 = () => {
  const [visibleModalProduct, setVisibleModalProduct] = useState(false);

  return (
    <div>
      <button
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
      />
    </div>
  );
};

export default Scheduled2;
