import React, { useState } from "react";
import styles from "./LinkModal.module.sass";
import cn from "classnames";
import ModalProductLink from "../../../../components/ModalProductLink";

const LinkModal = ({ link }) => {
  const [visibleModalProduct, setVisibleModalProduct] = useState(false);

  return (
    <div>
      <div onClick={() => setVisibleModalProduct(true)}>{link}</div>
      <ModalProductLink
        visible={visibleModalProduct}
        onClose={() => setVisibleModalProduct(false)}
        editOption={false}
      />
    </div>
  );
};

export default LinkModal;
