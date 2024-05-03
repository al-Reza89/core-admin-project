import React from "react";
import styles from "./AppPreview.module.sass";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

const AppPreview = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.paragraph}>
        <span>Click below to check the app preview.</span>
        <br />
        <span>
          We can do further customizations on application UI directly via chat.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <button
          onClick={() => navigate("/products/preview")}
          className={cn("button", styles.button)}
        >
          <span>Go to App Preview</span>
        </button>
      </div>
    </div>
  );
};

export default AppPreview;
