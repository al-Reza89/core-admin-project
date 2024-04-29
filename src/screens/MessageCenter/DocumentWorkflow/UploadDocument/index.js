import React from "react";
import UploadFile from "../../../CreateWorkflow/AddSource/UploadFile";
import styles from "./UploadDocument.module.sass";

const UploadDocument = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div className={styles.paragraph}>
        Upload your document here to start.
      </div>
      <div>
        <UploadFile title={false} />
      </div>
    </div>
  );
};

export default UploadDocument;
