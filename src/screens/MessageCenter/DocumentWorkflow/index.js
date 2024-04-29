import React from "react";
import cn from "classnames";
import styles from "./DocumentWorkflow.module.sass";
import UploadDocument from "./UploadDocument";

const DocumentWorkflow = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        paddingTop: "100px",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          paddingRight: "60px",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
          }}
          className={cn(styles.message, {
            [styles.leftMessage]: true,
          })}
        >
          <div className={styles.messageContent}>
            <div className={styles.uploadFileDocument}>
              <UploadDocument />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://freelogopng.com/images/all_img/1681142503openai-icon-png.png"
              alt="User Avatar"
              className={styles.avatarLeft}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentWorkflow;
